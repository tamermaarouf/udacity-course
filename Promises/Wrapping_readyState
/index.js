function ready() {
	/*
	Your code goes here!

	Instructions:
	(1) Set network throttling.
	(2) Wrap an event listener for readystatechange in a Promise.
	(3) If document.readyState is not 'loading', resolve().
	(4) Test by chaining wrapperResolved(). If all goes well, you should see "Resolved" on the page!

	Make sure you return the Promise!
	 */

	return new Promise(function (resolve) {
		function checkState() {
			if (document.readyState !== 'loading') {
				resolve();
			}
		}
		document.addEventListener('readystatechange', checkState);
		/*
		Your code here too!
		 */
		checkState();

	});
}

/*
Don't forget to test your code!
Call wrapperResolved when the DOM is ready.
 */
ready().then(wrapperResolved());

// Just here for your testing
function wrapperResolved() {
	var completion = document.querySelector('.completion');
	completion.innerHTML = "Resolved!";
}