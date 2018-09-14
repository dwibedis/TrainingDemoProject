function search() {
	document.getElementById("askReview").classList.remove("hidden");
	var query = document.getElementById("searchQuery").value;
	var movieNameDiv = document.getElementById("nameOfMovie");
	movieNameDiv.innerHTML = query;
	if (query === "Schindler's List") {
		loadSchindlerData();
	} else if (query === "Shawsank Redemption") {
		loadShawsankData();
	} else {
		loadRsultNotFound();
	}
}

function loadSchindlerData() {
	removePreviousChildren(document.getElementById("result"));
	var div, h2, h3, h3Para;
	for (var i = 0; i < 3; i++) {
		div = document.createElement("div");
		div.classList.add("boxed");
		h2 = document.createElement("h2");
		h3 = document.createElement("h3");
		h3Para = document.createElement("h3");

		if (i == 0) {
			h2.appendChild(document.createTextNode("IMDB"));
			h3.appendChild(document.createTextNode("* * * * *"));
			h3Para
					.appendChild(document
							.createTextNode('In German-occupied Poland during World War\
					II, Oskar Schindlergradually becomes concerned for his Jewish workforce \
					after witnessing their persecution by the Nazi Germans'));
		} else if (i == 1) {
			h2.appendChild(document.createTextNode("RottenTomatoes"));
			h3.appendChild(document.createTextNode("* * * *"));
			h3Para
					.appendChild(document
							.createTextNode('Schindler\'s List blends the abject horror of the Holocaust\
					with Steven Spielberg\'s signature tender humanism to create the\
					director\'s dramatic masterpiece'));
		} else {
			h2.appendChild(document.createTextNode("MindFire"));
			h3.appendChild(document.createTextNode("* * * * * "));
			h3Para
					.appendChild(document
							.createTextNode('It\'s an outstanding and awesome movie and it\'s a great movie\
					as a whole not just story wise or direction. We would like to such\
					movies in future.'));
		}
		div.appendChild(h2);
		div.appendChild(h3);
		div.appendChild(h3Para);
		document.getElementById("result").appendChild(div);
	}
}

function loadShawsankData() {
	removePreviousChildren(document.getElementById("result"));
	var div, h2, h3, h3Para;
	for (var i = 0; i < 3; i++) {
		div = document.createElement("div");
		div.classList.add("boxed");
		h2 = document.createElement("h2");
		h3 = document.createElement("h3");
		h3Para = document.createElement("h3");

		if (i == 0) {
			h2.appendChild(document.createTextNode("IMDB"));
			h3.appendChild(document.createTextNode("* * * * "));
			h3Para
					.appendChild(document
							.createTextNode('Two imprisoned men bond over a number of years, \
									finding solace and eventual redemption through acts of common \
									decency.'));
		} else if (i == 1) {
			h2.appendChild(document.createTextNode("RottenTomatoes"));
			h3.appendChild(document.createTextNode("* * * *"));
			h3Para
					.appendChild(document
							.createTextNode('The Shawshank Redemption is an uplifting,\
									deeply satisfying prison drama with sensitive direction\
									and fine performances.'));
		} else {
			h2.appendChild(document.createTextNode("MindFire"));
			h3.appendChild(document.createTextNode("* * * * * "));
			h3Para
					.appendChild(document
							.createTextNode('It\'s an outstanding and awesome movie and it\'s a great movie\
					as a whole not just story wise or direction. We would like to such\
					movies in future.'));
		}
		div.appendChild(h2);
		div.appendChild(h3);
		div.appendChild(h3Para);
		document.getElementById("result").appendChild(div);
	}
}

function loadRsultNotFound() {
	document.getElementById("result").appendChild(document.createTextNode("Sorry No results avialable"));
}

function removePreviousChildren(parent) {
	while (parent.firstChild) {
	    parent.firstChild.remove();
	}
}

function submitReview() {
	alert(document.getElementById("review").value);
	document.getElementById("askReview").classList.add("hidden");
	reset();
}

function reset() {
	removePreviousChildren(document.getElementById("result"));
	document.getElementById("nameOfMovie").innerHTML = 'The largest collection of\
	movie reviews';
}