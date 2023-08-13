# watchlist-cleaner
A simple script I made to clear out my watchlist on youtube. I'm sure it works on other lists too, but I haven't had to use it for that purpose. You enter where you want to start deleting and the delete count.

### How to use
1. Head to your watchlist at https://www.youtube.com/playlist?list=WL
2. Open the developer console by pressing either ctrl+shift+k(firefox), ctrl+shift+i(chrome) or F12 and heading to the console tab
3. Post all the contents from [script.js](./script.js) into the console
4. Scroll down to where you'd like to start deleting, in the console type listSize() to see how many videos are in the list
5. Type removeListItem(start, count) into the console, replacing 'start' with where in the list you'd like to start deleting, and count with the number of videos you'd like deleted.

Example: 'removeListItem(1200, 300)' delete 300 videos starting from the 1200th video. Do note that you'd need 1500 videos loaded onto the page for it to work. Use listSize() to see how many are loaded.

### Notes
- Theres a limit to how fast you can delete videos. I'd say around 550ms is the lowest you can go before youtube starts denying your requests, and I'm not sure if youtube would take actions against you if you go lower. Change the DELETE_SPEED variable if you'd like to.

- You can do whatever you like with the script. I'd suggest just making a better verison of it if you want to since I threw this one together pretty quickly.