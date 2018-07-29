# Brand App
An app that takes a couple words describing your business idea, generates a list of names and logos, and checks their domain and social media availability.

## Process
This app has three main parts:

 * Generate a list of business/app names based on one or two key words.
 * Randomly generate logos based on those names.
 * Check the URL and social media availablity of those names.

### Name Generation
The user will input a couple words (maybe just one word?) and we will generate names in the following ways:

 * Find related words (music -> tunes, songs, rhythm)
 * Add suffixes and prefixes to words (musicify, instamusic).
   * unmusic
 * Merge words (musitunes, singsongs)
 * Find popular sayings and create puns.
 * Remove vowels

### Logo Generation
Based on the list of names, generate a logo for each name. Options:

 * Write the name in a Display font.
 * Find a related symbol and put it in a shape
     * Symbol can be based on word or first letter
 * Put initials in a shape/font
 * Different templates where we could swap out the symbol/color/word.
