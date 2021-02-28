#!/usr/bin/env ruby
# frozen_string_literal: true

require 'bundler/setup'
require 'bunny'
require 'optparse'
require 'json'
require_relative 'rabbitmq-opts'

options = {}

option_parser = OptParse.new do |opts|
  opts.banner = "Usage: #{$0} -u <user id>"

  opts.on('-u', '--user', '=MANDATORY', 'Watch logs for user id') do |u|
    options[:user] = u
  end
end

begin
  option_parser.parse!
rescue
  $stderr.puts "Error: #{$!}"
  $stderr.puts option_parser.help
  exit 1
end

unless options[:user]
  $stderr.puts option_parser.help
  exit 1
end

conn = Bunny.new RABBITMQ_OPTS
conn.start

ch = conn.create_channel

# Create a header exchange
xchange = ch.headers('user-log')

# watch only log messages for the given user id
q1 = ch.queue('', :exclusive => true)
q1.bind(xchange, :arguments => { 'user' => options[:user], 'x-match' => 'all' })

# Keep this short so that focus is on the actual message, feel free to change
severity_levels = %w[D I W E F]

# Feel free to update the output format
q1.subscribe block: true do |delivery_info, properties, content|
  headers = properties[:headers]
  user = headers['user']
  session = headers['session']
  timestamp = Time.at(headers['ts'].to_i / 1000.0)
  severity = severity_levels[headers['severity'].to_i]

  puts "#{severity},#{timestamp.strftime('%H:%M:%S.%L')},S:#{session.sub(/.*-/, '')} - #{content}"
end
