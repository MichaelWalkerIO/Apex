#!/usr/bin/perl

use DBI;
use strict;

my $driver   = "SQLite";
my $database = "appointments.db";
my $dsn = "DBI:$driver:dbname=$database";
my $userid = "";
my $password = "";
my $dbh = DBI->connect($dsn, $userid, $password, { RaiseError => 1 })
                      or die $DBI::errstr;
print "Opened database successfully\n";

my $stmt = qq(CREATE TABLE APPOINTMENT
      (
       TIME           DATETIME    NOT NULL,
       DESCRIPTION    TEXT        NOT NULL););
my $rv = $dbh->do($stmt);
if($rv < 0){
   print $DBI::errstr;
} else {
   print "Table created successfully\n";
}
$dbh->disconnect();