var slideIndex = 1;

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
function kpopGroup(name,members,link){
  return {
    name:name,
   members:members,
  link:link 
  }
}
var kpopGroups=[
  {name:"bts",members:7,link:'./bts.html'},
  {name:"blackpink",members:4,link:'./blackpink.html'},
  {name:"new Jeans",member:5,link:'./NewJeans.html'},
  {name:"fifty-fifty",member:4,link:'./FiftyFifty.html'}
  ]
// 
function searchByName(query,array){
  return  filter (array,function(element,index){
     return element.name.includes(query)
  })

}
function displaySearchResults(results) {
    
     $('#resultsList').empty();
    if (results.length === 0) {
         $('#resultsList').append('<li>No results found</li>');
    } else {
        each(results , function(result) {
             $('#resultsList').append('<li><a href="'+result.link +'">' + result.name + '</a></li>');
        });
    }

    $('#searchResults').removeClass('hidden');
}
$(document).ready(function() {

  showSlides(slideIndex)
    $('#btn').on('click',function() {
      var query = $("#searchInput").val();
      var results = searchByName(query,kpopGroups)
      displaySearchResults(results)
    })
    $('.mySlides').on('click',function() {
      window.location.assign(kpopGroups[slideIndex-1].link)
    })
});
// slider JS

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i=0;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
