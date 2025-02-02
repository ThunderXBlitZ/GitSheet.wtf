const fs = require('fs');
const beautify = require('js-beautify').html;

// Load JSON data
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Function to generate HTML content with separate tables for each section
function generateTables(data) {
  let html = '';

  data.forEach(section => {
    html += `<h3 id="${section.header.toLowerCase()}">${section.header}<a href="#${section.header.toLowerCase()}"><i class="fa fa-link" aria-hidden="true"></i></a></h3>\n`;
    html += `<table class="table">\n`;
    html += `<thead><tr><th>Command</th><th>Description</th><th>Action</th></tr></thead>\n`;
    html += `<tbody>\n`;

    section.records.forEach(record => {
      html += `<tr>`;
      record.forEach(cell => {
        html += `<td>${cell}</td>`;
      });
      html += `<td><button class="btn btn-secondary" onclick="copyToClipboard(this)">Copy</button></td>`;
      html += `</tr>\n`;
    });

    html += `</tbody>\n</table><br><br>\n`;
  });

  return html;
}

// Generate tables content
const tablesHtml = generateTables(data);

// Read the existing HTML template
let htmlTemplate = fs.readFileSync('index_template.html', 'utf8');

// Replace placeholder with generated tables
htmlTemplate = htmlTemplate.replace('<!-- TABLE_PLACEHOLDER -->', tablesHtml);

// Format the HTML before saving
const formattedHtml = beautify(htmlTemplate, {
  indent_size: 2,
  wrap_line_length: 80,
  preserve_newlines: true
});

// Write the formatted HTML file
fs.writeFileSync('index.html', formattedHtml);

console.log('index.html has been generated and formatted successfully.');