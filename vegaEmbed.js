// var yourVlSpec = {
//     $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//     description: "A simple bar chart with embedded data.",
//     data: {
//       values: [
//         { a: "A", b: 28 },
//         { a: "B", b: 55 },
//         { a: "C", b: 43 },
//         { a: "D", b: 91 },
//         { a: "E", b: 81 },
//         { a: "F", b: 53 },
//         { a: "G", b: 19 },
//         { a: "H", b: 87 },
//         { a: "I", b: 52 },
//       ],
//     },
//     mark: "bar",
//     encoding: {
//       x: { field: "a", type: "ordinal" },
//       y: { field: "b", type: "quantitative" },
//     },
//   };
//   vegaEmbed("#view", yourVlSpec);

//HI!!! I'm requesting the help of chatGPT here because I can't seem to load my data properly. I will try to change this ASAP

// Load the CSV data using d3.csv and filter it
async function loadDataAndCreateChart() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");
  
    // Process the data (if needed), e.g., extract only certain categories like Platform, Genre, and Global_Sales
    const filteredData = data.map(d => ({
      Platform: d.Platform,
      Genre: d.Genre,
      Global_Sales: +d.Global_Sales,  // Convert sales to numbers
    }));
  
    // Create the Vega-Lite specification using the filtered data
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "Bar chart using video game sales data.",
      data: { values: filteredData }, // Use filtered data here
      mark: "bar",
      encoding: {
        x: { field: "Platform", type: "ordinal", title: "Platform" }, // Change field to Platform or Genre
        y: { field: "Global_Sales", type: "quantitative", aggregate: "sum", title: "Global Sales (in millions)" },
        tooltip: [ // Add tooltip encoding
            { field: "Global_Sales", type: "quantitative", title: "Global Sales (Millions)" },
        ]
      },
    };
  
    // Embed the Vega-Lite chart
    vegaEmbed("#view", yourVlSpec);
  }
  
  // Call the function to load data and create the chart
loadDataAndCreateChart();

// Load the CSV data using d3.csv and filter it
async function loadDataAndCreateChart1_5() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");
  
    // Process the data (if needed), e.g., extract only certain categories like Platform, Genre, and Global_Sales
    const filteredData = data.map(d => ({
      Platform: d.Platform,
      Genre: d.Genre,
      Global_Sales: +d.Global_Sales,  // Convert sales to numbers
    }));
  
    // Create the Vega-Lite specification using the filtered data
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "Bar chart using video game sales data.",
      data: { values: filteredData }, // Use filtered data here
      mark: "bar",
      encoding: {
        x: { field: "Genre", type: "ordinal", title: "Genre" }, // Change field to Platform or Genre
        y: { field: "Global_Sales", type: "quantitative", aggregate: "sum", title: "Global Sales (in millions)" },
        tooltip: [ // Add tooltip encoding
            { field: "Global_Sales", type: "quantitative", title: "Global Sales (Millions)" },
        ]
      },
    };
  
    // Embed the Vega-Lite chart
    vegaEmbed("#view2", yourVlSpec);
  }
  
  // Call the function to load data and create the chart
loadDataAndCreateChart1_5();

  // Load the CSV data using d3.csv and filter it
async function loadDataAndCreateChart2() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");
  
    // Process the data (if needed), e.g., extract only certain categories like Platform, Genre, and Global_Sales
    const filteredData = data.map(d => ({
      Year: d.Year,
      Genre: d.Genre,
      Platform: d.Platform,
      Global_Sales: +d.Global_Sales,  // Convert sales to numbers
    }));
  
    // Create the Vega-Lite specification using the filtered data
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "Bar chart using video game sales data.",
      data: { values: filteredData }, // Use filtered data here
      title: `Genre & Platform: All`,
      mark: "bar",
      encoding: {
        x: { field: "Year", type: "ordinal", title: "Year" }, // Change field to Platform or Genre
        y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
        tooltip: [ // Add tooltip encoding
          { field: "Genre", type: "nominal", title: "Genre" },
          { field: "Platform", type: "nominal", title: "Platform" },
            { field: "Global_Sales", type: "quantitative", format: ".2f", title: "Global Sales (Millions)" },
        ]
      },
    };
  
    // Embed the Vega-Lite chart
    vegaEmbed("#view3", yourVlSpec);
  }
  
  // Call the function to load data and create the chart
  loadDataAndCreateChart2();

  async function loadDataAndCreateChart2_5() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");
  
    // Process the data (if needed), e.g., extract only certain categories like Platform, Genre, and Global_Sales
    const filteredData = data.map(d => ({
      Year: d.Year,
      Platform: d.Platform,
      Global_Sales: +d.Global_Sales,  // Convert sales to numbers
    }));
  
    // Create the Vega-Lite specification using the filtered data
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "Bar chart using video game sales data.",
      data: { values: filteredData }, // Use filtered data here
      title: `Ignore This`,
      mark: "bar",
      encoding: {
        x: { field: "Year", type: "ordinal", title: "Year" }, // Change field to Platform or Genre
        y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
        tooltip: [ // Add tooltip encoding
            { field: "Platform", type: "nominal", title: "Platform" },
            { field: "Global_Sales", type: "quantitative", format: ".2f", title: "Global Sales (Millions)" },
        ]
      },
    };
  
    // Embed the Vega-Lite chart
    vegaEmbed("#view4", yourVlSpec);
  }
  
  // Call the function to load data and create the chart
  loadDataAndCreateChart2_5();

  // Load the CSV data using d3.csv and filter it to show total sales per Genre
async function loadDataAndCreateChart3() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");
  
    // Process the data (if needed), e.g., extract only certain categories like Platform, Genre, and Global_Sales
    const filteredData = data.map(d => ({
        Year: d.Year,
        Genre: d.Genre,
        Platform: d.Platform,
        Global_Sales: +d.Global_Sales,  // Convert sales to numbers
      }));
    
      const genres = [...new Set(filteredData.map(d => d.Genre))];

      //make divs for each genre, but w/o having to type them all out
      const container = document.getElementById('genreContainer');
      genres.forEach(genre=> {
        const div = document.createElement("div");
        div.id = `view4-${genre.replace(/\s/g, '-')}`; //sets id for div
        container.appendChild(div); //appends new div to container
      });

      genres.forEach(genre => {
        // Filter data for each genre

        const genreData = filteredData.filter(d => d.Genre === genre);
        
        // Create a Vega-Lite specification using the filtered data for this genre
        const yourVlSpec = {
          $schema: "https://vega.github.io/schema/vega-lite/v5.json",
          description: `Bar chart for genre: ${genre}`,
          title: `Genre: ${genre}`,
          data: { values: genreData }, // Use filtered data here
          mark: "bar",
          width: 550,
          encoding: {
            x: { field: "Year", type: "ordinal", title: "Year" },
            y: { field: "Global_Sales", type: "quantitative", aggregate: "sum", title: "Global Sales (in millions)" },
            tooltip: [
              { field: "Global_Sales", type: "nominal", title: "Global Sales" },
            ]
          },
        };
    
      // Embed the Vega-Lite chart
      console.log(yourVlSpec); 
      vegaEmbed(`#view4-${genre.replace(/\s/g, '-')}`, yourVlSpec);
  });
}
  
  // Call the function to load data and create the chart
loadDataAndCreateChart3();

async function loadDataAndCreateChart4() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");
  
    // Process the data (if needed), e.g., extract only certain categories like Platform, Genre, and Global_Sales
    const filteredData = data.map(d => ({
        Year: d.Year,
        Genre: d.Genre,
        Platform: d.Platform,
        Global_Sales: +d.Global_Sales,  // Convert sales to numbers
      }));
    
      const platforms = [...new Set(filteredData.map(d => d.Platform))];

      //make divs for each genre, but w/o having to type them all out
      const container = document.getElementById('platformContainer');
      platforms.forEach(platform=> {
        const div = document.createElement("div");
        div.id = `view45-${platform.replace(/\s/g, '-')}`; //sets id for div
        container.appendChild(div); //appends new div to container
      });

      platforms.forEach(platform => {
        // Filter data for each genre

        const platformData = filteredData.filter(d => d.Platform === platform);
        
        // Create a Vega-Lite specification using the filtered data for this genre
        const yourVlSpec = {
          $schema: "https://vega.github.io/schema/vega-lite/v5.json",
          description: `Bar chart for platform: ${platform}`,
          title: `Platform: ${platform}`,
          data: { values: platformData }, // Use filtered data here
          mark: "bar",
          width: 550,
          encoding: {
            x: { field: "Year", type: "ordinal", title: "Year" },
            y: { field: "Global_Sales", type: "quantitative", aggregate: "sum", title: "Global Sales (in millions)" },
            tooltip: [
              { field: "Global_Sales", type: "nominal", title: "Global Sales" },
            ]
          },
        };
    
      // Embed the Vega-Lite chart
      console.log(yourVlSpec); 
      vegaEmbed(`#view45-${platform.replace(/\s/g, '-')}`, yourVlSpec);
  });
}
  
  // Call the function to load data and create the chart
loadDataAndCreateChart4();

async function loadDataAndCreateChartNA() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");

    // Process the data to extract Platform and JP_Sales
    const filteredData = data.map(d => ({
        Platform: d.Platform,
        NA_Sales: +d.NA_Sales || 0, 
    }));

    var yourVlSpec = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "Bar chart showing JP Sales per Platform.",
        data: { values: filteredData }, //filtered data 
        mark: "bar",
        encoding: {
            x: { field: "Platform", type: "ordinal", title: "Platform" }, // x for Platform
            y: { field: "NA_Sales", type: "quantitative", aggregate: "sum", title: "NA Sales (in millions)" }, // y for JP Sales
            tooltip: [ // Add tooltip encoding
                { field: "NA_Sales", type: "quantitative", title: "NA Sales" },
            ]
        },
    };

    // Embed the Vega-Lite chart
    vegaEmbed("#view5", yourVlSpec);
}

// Call the function to load data and create the chart
loadDataAndCreateChartNA();

async function loadDataAndCreateChartEU() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");

    // Process the data to extract Platform and JP_Sales
    const filteredData = data.map(d => ({
        Platform: d.Platform,
        EU_Sales: +d.EU_Sales || 0, 
    }));

    var yourVlSpec = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "Bar chart showing JP Sales per Platform.",
        data: { values: filteredData }, //filtered data 
        mark: "bar",
        encoding: {
            x: { field: "Platform", type: "ordinal", title: "Platform" }, // x for Platform
            y: { field: "EU_Sales", type: "quantitative", aggregate: "sum", title: "EU Sales (in millions)" }, // y for JP Sales
            tooltip: [ // Add tooltip encoding
                { field: "EU_Sales", type: "quantitative", title: "EU Sales" },
            ]
        },
    };

    // Embed the Vega-Lite chart
    vegaEmbed("#view6", yourVlSpec);
}

// Call the function to load data and create the chart
loadDataAndCreateChartEU();

async function loadDataAndCreateChartJP() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");

    // Process the data to extract Platform and JP_Sales
    const filteredData = data.map(d => ({
        Platform: d.Platform,
        JP_Sales: +d.JP_Sales || 0, 
    }));

    var yourVlSpec = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "Bar chart showing JP Sales per Platform.",
        data: { values: filteredData }, //filtered data 
        mark: "bar",
        encoding: {
            x: { field: "Platform", type: "ordinal", title: "Platform" }, // x for Platform
            y: { field: "JP_Sales", type: "quantitative", aggregate: "sum", title: "JP Sales (in millions)" }, // y for JP Sales
            tooltip: [ // Add tooltip encoding
                { field: "JP_Sales", type: "quantitative", title: "JP Sales" },
            ]
        },
    };

    // Embed the Vega-Lite chart
    vegaEmbed("#view7", yourVlSpec);
}

// Call the function to load data and create the chart
loadDataAndCreateChartJP();

async function loadDataAndCreateChartOther() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");

    // Process the data to extract Platform and JP_Sales
    const filteredData = data.map(d => ({
        Platform: d.Platform,
        Other_Sales: +d.Other_Sales || 0, 
    }));

    var yourVlSpec = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "Bar chart showing JP Sales per Platform.",
        data: { values: filteredData }, //filtered data 
        mark: "bar",
        encoding: {
            x: { field: "Platform", type: "ordinal", title: "Platform" }, // x for Platform
            y: { field: "Other_Sales", type: "quantitative", aggregate: "sum", title: "Other Sales (in millions)" }, // y for JP Sales
            tooltip: [ // Add tooltip encoding
                { field: "Other_Sales", type: "quantitative", title: "Other Sales" },
            ]
        },
    };

    // Embed the Vega-Lite chart
    vegaEmbed("#view8", yourVlSpec);
}

// Call the function to load data and create the chart
loadDataAndCreateChartOther();