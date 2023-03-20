const fs = require('fs');
const xml2js = require('xml2js');

// Lee el archivo sitemap.xml
fs.readFile('./out/sitemap.xml', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Convierte el XML en un objeto JavaScript
  xml2js.parseString(data, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    // Recorre todas las URLs en el objeto y elimina los "index"
    result.urlset.url = result.urlset.url.map((url) => {
      if (url.loc[0].endsWith('index')) {
        url.loc[0] = url.loc[0].slice(0, -6);
      }
      return url;
    });
    // Convierte el objeto JavaScript de nuevo en XML
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);
    // Escribe el archivo sitemap.xml actualizado
    fs.writeFile('./out/sitemap.xml', xml, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Archivo sitemap.xml actualizado exitosamente!');
    });
  });
});