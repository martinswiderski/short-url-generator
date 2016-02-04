#!/usr/bin/env bash
# Declarations
DATE=`date`
OUTFILE="eslint-results.txt"
USER=`whoami`
# Output file re-created for each run
if [ -f $OUTFILE ];
then
   echo "File $OUTFILE exists, removing it..."
   rm $OUTFILE
fi
echo "Creating $OUTFILE anew..."
touch $OUTFILE
# Building results
echo "Last run by [$USER] on... $DATE" >> $OUTFILE
echo "" >> $OUTFILE
echo "**************************" >> $OUTFILE
echo "* Source                 *" >> $OUTFILE
echo "**************************" >> $OUTFILE
echo ""
eslint src/*.js >> $OUTFILE
echo "**************************" >> $OUTFILE
echo "* Tests                  *" >> $OUTFILE
echo "**************************" >> $OUTFILE
echo ""
eslint tests/specs/*-spec.js >> $OUTFILE
echo "**************************"
echo "** eslint check results **"
echo "**************************"
echo ""
cat $OUTFILE
