#!/usr/bin/perl
use strict;
use warnings;
 
use DBI;
use CGI;
use JSON;


my $q = new CGI;
my %data;
 
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
 
my $sql = 'SELECT time, description FROM Appointment WHERE description like ?';
my $sth = $dbh->prepare($sql);
$sth->execute('test');
while (my @row = $sth->fetchrow_array) {
   print encode_json({ 'time' => $row[0],  'description' => $row[1] });
}
 
 
$dbh->disconnect;