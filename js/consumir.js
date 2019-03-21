

/*======  Consumo de Api Flickr  ======*/


$("#botonBuscar").on("click", function()
{

	var contenido = "";
	var buscar = $("#buscar").val();

	$("#resultado").text("Cargando...");

	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=" + buscar + "&tagmode=any&format=json&jsoncallback=?", function(datos)
	{

		$.each(datos.items, function(i, item)
		{

			contenido += "<div class = 'col-lg-3 col-md-4 col-sm-6 col-xs-12 imagenes'>";
			contenido += 	"<div class = 'thumbnail'>";
			contenido += 		"<img src = '" + item.media.m + "'>";
			contenido += 		"<div class = 'caption'>";
			contenido += 			"<h3 class = 'text-primary'>" + item.title + "</h3>";
			contenido += 			"<a class = 'text-success' href = '" + item.link + "'>www.flickr.com</a>";
			contenido +=			"<p>" + item.tags + "</p>";
			contenido +=		"</div>";
			contenido += 	"</div>";
			contenido += "</div>";			

		});

		$("#resultado").html(contenido);

		$("#buscar").val("");

	});

});

