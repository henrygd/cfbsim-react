#! /bin/bash

# will break if cfbstats.com changes current site format

rm -rf national_stats/* team_pages/*
./grab_teams.rb
./grab_national_stats.rb
./save_ratings.rb
./addWinPct.js