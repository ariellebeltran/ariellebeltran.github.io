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
        y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" }
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
        y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" }
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
      Global_Sales: +d.Global_Sales,  // Convert sales to numbers
    }));
  
    // Create the Vega-Lite specification using the filtered data
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "Bar chart using video game sales data.",
      data: { values: filteredData }, // Use filtered data here
      mark: "bar",
      encoding: {
        x: { field: "Year", type: "ordinal", title: "Year" }, // Change field to Platform or Genre
        y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
        tooltip: [ // Add tooltip encoding
          { field: "Genre", type: "nominal", title: "Genre" },
        ]
      },
    };
  
    // Embed the Vega-Lite chart
    vegaEmbed("#view3", yourVlSpec);
  }
  
  // Call the function to load data and create the chart
  loadDataAndCreateChart2();

  // Load the CSV data using d3.csv and filter it to show total sales per Genre
async function loadDataAndCreateChart2_5() {
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
        mark: "bar",
        encoding: {
          x: { field: "Year", type: "ordinal", title: "Year" }, // Change field to Platform or Genre
          y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
          tooltip: [ // Add tooltip encoding
            { field: "Genre", type: "nominal", title: "Genre" }, // Tooltip for Genre
          ]
          
        },
        facet: {
        field: "Platform", // Facet by Platform
        title: "Platform" // Title for the facet
        }
      };
  
    // Embed the Vega-Lite chart
    vegaEmbed("#view4", yourVlSpec);
  }
  
  // Call the function to load data and create the chart
  loadDataAndCreateChart2_5();

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
            y: { field: "NA_Sales", type: "quantitative", title: "NA Sales (in millions)" }, // y for JP Sales
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
            y: { field: "EU_Sales", type: "quantitative", title: "EU Sales (in millions)" }, // y for JP Sales
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
            y: { field: "JP_Sales", type: "quantitative", title: "JP Sales (in millions)" }, // y for JP Sales
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
            y: { field: "Other_Sales", type: "quantitative", title: "Other Sales (in millions)" }, // y for JP Sales
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