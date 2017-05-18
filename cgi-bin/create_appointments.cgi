#!/usr/bin/perl
use strict;
use warnings;
 
use DBI;
 
my $dbfile = "appointments.db";
 
my $dsn      = "dbi:SQLite:dbname=$dbfile";
my $user     = "";
my $password = "";
my $dbh = DBI->connect($dsn, $user, $password, {
   PrintError       => 0,
   RaiseError       => 1,
   AutoCommit       => 1,
   FetchHashKeyName => 'NAME_lc',
});
 
my $time = '2010-01-01 10:00:00';
my $desc = 'something described';
$dbh->do('INSERT INTO APPOINTMENT (time, DESCRIPTION) VALUES (?, ?)',
  undef,
  $time, $desc);
 
$dbh->disconnect;