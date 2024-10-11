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
//     const data = await d3.csv("./dataset/videogames_wide.csv");
  
//     // Process the data (if needed), e.g., extract only certain categories like Platform, Genre, and Global_Sales
//     const filteredData = data.map(d => ({
//         Year: d.Year,
//         Genre: d.Genre,
//         Platform: d.Platform,
//         Global_Sales: +d.Global_Sales,  // Convert sales to numbers
//       }));
    
//       const genres = [...new Set(filteredData.map(d => d.Genre))];

//       //make divs for each genre, but w/o having to type them all out
//       const container = document.getElementById('genreContainer');
//       genres.forEach(genre=> {
//         const div = document.createElement("div");
//         div.id = `view4-${genre.replace(/\s/g, '-')}`; //sets id for div
//         container.appendChild(div); //appends new div to container
//       });

//       genres.forEach(genre => {
//         // Filter data for each genre

//         const genreData = filteredData.filter(d => d.Genre === genre);
        
//         // Create a Vega-Lite specification using the filtered data for this genre
//         const yourVlSpec = {
//           $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//           description: `Bar chart for genre: ${genre}`,
//           title: `Genre: ${genre}`,
//           data: { values: genreData }, // Use filtered data here
//           mark: "bar",
//           width: 550,
//           encoding: {
//             x: { field: "Year", type: "ordinal", title: "Year" },
//             y: { field: "Global_Sales", type: "quantitative", aggregate: "sum", title: "Global Sales (in millions)" },
//             tooltip: [
//               { field: "Global_Sales", type: "nominal", title: "Global Sales" },
//             ]
//           },
//         };
    
//       // Embed the Vega-Lite chart
//       console.log(yourVlSpec); 
//       vegaEmbed(`#view4-${genre.replace(/\s/g, '-')}`, yourVlSpec);
//   });
// }
  
//----------------------------------------------------------------

    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");
    
    // Process the data, extract only relevant columns
    const filteredData = data.map(d => ({
        Year: d.Year,
        Genre: d.Genre,
        Platform: d.Platform,
        Global_Sales: +d.Global_Sales,  // Convert sales to numbers
    }));

    const genres = [...new Set(filteredData.map(d => d.Genre))];

    // Make divs for each genre dynamically
    const container = document.getElementById('genreContainer');
    genres.forEach(genre => {
        const div = document.createElement("div");
        div.id = `view4-${genre.replace(/\s/g, '-')}`; //sets id for div
        container.appendChild(div); //appends new div to container
    });

    genres.forEach(genre => {
        // Filter data for each genre
        const genreData = filteredData.filter(d => d.Genre === genre);
        
        // New grouping and summing logic for each genre by year
        const groupedData = [];
        const salesByYear = {};

        genreData.forEach(d => {
            if (!salesByYear[d.Year]) {
                salesByYear[d.Year] = 0;
            }
            salesByYear[d.Year] += d.Global_Sales; // Sum up sales for the same year
        });

        for (const year in salesByYear) {
            groupedData.push({
                Year: year,
                Global_Sales: salesByYear[year],
            });
        }

        // Log grouped data for debugging
        console.log(`Grouped data for genre: ${genre}`, groupedData);

        // Create a Vega-Lite specification using the grouped data for each genre
        const yourVlSpec = {
            $schema: "https://vega.github.io/schema/vega-lite/v5.json",
            description: `Bar chart for genre: ${genre}`,
            title: `Genre: ${genre}`,
            data: { values: groupedData }, // Use grouped data here
            mark: "bar",
            width: 550,
            encoding: {
                x: { field: "Year", type: "ordinal", title: "Year" },
                y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
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
//     const data = await d3.csv("./dataset/videogames_wide.csv");
  
//     // Process the data (if needed), e.g., extract only certain categories like Platform, Genre, and Global_Sales
//     const filteredData = data.map(d => ({
//         Year: d.Year,
//         Genre: d.Genre,
//         Platform: d.Platform,
//         Global_Sales: +d.Global_Sales,  // Convert sales to numbers
//       }));
    
//       const platforms = [...new Set(filteredData.map(d => d.Platform))];

//       //make divs for each genre, but w/o having to type them all out
//       const container = document.getElementById('platformContainer');
//       platforms.forEach(platform=> {
//         const div = document.createElement("div");
//         div.id = `view45-${platform.replace(/\s/g, '-')}`; //sets id for div
//         container.appendChild(div); //appends new div to container
//       });

//       platforms.forEach(platform => {
//         // Filter data for each genre

//         const platformData = filteredData.filter(d => d.Platform === platform);
        
//         // Create a Vega-Lite specification using the filtered data for this genre
//         const yourVlSpec = {
//           $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//           description: `Bar chart for platform: ${platform}`,
//           title: `Platform: ${platform}`,
//           data: { values: platformData }, // Use filtered data here
//           mark: "bar",
//           width: 550,
//           encoding: {
//             x: { field: "Year", type: "ordinal", title: "Year" },
//             y: { field: "Global_Sales", type: "quantitative", aggregate: "sum", title: "Global Sales (in millions)" },
//             tooltip: [
//               { field: "Global_Sales", type: "nominal", title: "Global Sales" },
//             ]
//           },
//         };
    
//       // Embed the Vega-Lite chart
//       console.log(yourVlSpec); 
//       vegaEmbed(`#view45-${platform.replace(/\s/g, '-')}`, yourVlSpec);
//   });
// }
  

        // Load the CSV data
        const data = await d3.csv("./dataset/videogames_wide.csv");
    
        // Process the data, extract only relevant columns
        const filteredData = data.map(d => ({
            Year: d.Year,
            Genre: d.Genre,
            Platform: d.Platform,
            Global_Sales: +d.Global_Sales,  // Convert sales to numbers
        }));
        
        const platforms = [...new Set(filteredData.map(d => d.Platform))];

        // Make divs for each genre dynamically
        const container = document.getElementById('platformContainer');
        platforms.forEach(platform => {
            const div = document.createElement("div");
            div.id = `view4-${platform.replace(/\s/g, '-')}`; //sets id for div
            container.appendChild(div); //appends new div to container
        });

        platforms.forEach(platform => {
            // Filter data for each genre
            const platformData = filteredData.filter(d => d.Platform === platform);
            
            // New grouping and summing logic for each genre by year
            const groupedData = [];
            const salesByYear = {};

            platformData.forEach(d => {
                if (!salesByYear[d.Year]) {
                    salesByYear[d.Year] = 0;
                }
                salesByYear[d.Year] += d.Global_Sales; // Sum up sales for the same year
            });

            for (const year in salesByYear) {
                groupedData.push({
                    Year: year,
                    Global_Sales: salesByYear[year],
                });
            }

            // Log grouped data for debugging
            console.log(`Grouped data for platform: ${platform}`, groupedData);

            // Create a Vega-Lite specification using the grouped data for each genre
            const yourVlSpec = {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                description: `Bar chart for platform: ${platform}`,
                title: `Platform: ${platform}`,
                data: { values: groupedData }, // Use grouped data here
                mark: "bar",
                width: 550,
                encoding: {
                    x: { field: "Year", type: "ordinal", title: "Year" },
                    y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
                    tooltip: [
                        { field: "Global_Sales", type: "nominal", title: "Global Sales" },
                    ]
                },
            };

            // Embed the Vega-Lite chart
            console.log(yourVlSpec); 
            vegaEmbed(`#view4-${platform.replace(/\s/g, '-')}`, yourVlSpec);
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

async function a2000story() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");

    // Process the data to filter entries after 2010
    const filteredData = data
        .filter(d => +d.Year >= 2000) // Filter for years >= 2010
        .map(d => ({
            Year: +d.Year,
            Genre: d.Genre,
            Platform: d.Platform,
            Global_Sales: +d.Global_Sales,  // Convert sales to numbers
        }));

    // Group sales by platform after 2010
    const platformSales = {};
    filteredData.forEach(d => {
        if (!platformSales[d.Platform]) {
            platformSales[d.Platform] = 0;
        }
        platformSales[d.Platform] += d.Global_Sales;
    });

    // Group sales by genre after 2010
    const genreSales = {};
    filteredData.forEach(d => {
        if (!genreSales[d.Genre]) {
            genreSales[d.Genre] = 0;
        }
        genreSales[d.Genre] += d.Global_Sales;
    });

    // Convert grouped platform and genre sales into arrays for sorting
    const platformsArray = Object.keys(platformSales).map(platform => ({
        Platform: platform,
        Global_Sales: platformSales[platform],
    }));

    const genresArray = Object.keys(genreSales).map(genre => ({
        Genre: genre,
        Global_Sales: genreSales[genre],
    }));

    // Sort the arrays to get the highest-selling platforms and genres
    platformsArray.sort((a, b) => b.Global_Sales - a.Global_Sales);
    genresArray.sort((a, b) => b.Global_Sales - a.Global_Sales);

    // Show top 5 platforms and genres
    const topPlatforms = platformsArray.slice(0, 5);
    const topGenres = genresArray.slice(0, 5);

    // Create bar chart for top platforms
    const platformChartSpec0 = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "Top 5 Highest-Selling Platforms After 2000",
        title: "Top 5 Platforms (2000 and later)",
        data: { values: topPlatforms },
        mark: "bar",
        encoding: {
            x: { field: "Platform", type: "ordinal", title: "Platform" },
            y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
            tooltip: [
                { field: "Platform", type: "nominal", title: "Platform" },
                { field: "Global_Sales", type: "quantitative", title: "Global Sales (Millions)" }
            ]
        },
    };

    // Create bar chart for top genres
    const genreChartSpec0 = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "Top 5 Highest-Selling Genres After 2000",
        title: "Top 5 Genres (2000 and later)",
        data: { values: topGenres },
        mark: "bar",
        encoding: {
            x: { field: "Genre", type: "ordinal", title: "Genre" },
            y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
            tooltip: [
                { field: "Genre", type: "nominal", title: "Genre" },
                { field: "Global_Sales", type: "quantitative", title: "Global Sales (Millions)" }
            ]
        },
    };

    // Embed both charts
    vegaEmbed("#platformChart0", platformChartSpec0);
    vegaEmbed("#genreChart0", genreChartSpec0);
}

// Call the function to load data and create the charts
a2000story();

async function a2010story() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");

    // Process the data to filter entries after 2010
    const filteredData = data
        .filter(d => +d.Year >= 2010) // Filter for years >= 2010
        .map(d => ({
            Year: +d.Year,
            Genre: d.Genre,
            Platform: d.Platform,
            Global_Sales: +d.Global_Sales,  // Convert sales to numbers
        }));

    // Group sales by platform after 2010
    const platformSales = {};
    filteredData.forEach(d => {
        if (!platformSales[d.Platform]) {
            platformSales[d.Platform] = 0;
        }
        platformSales[d.Platform] += d.Global_Sales;
    });

    // Group sales by genre after 2010
    const genreSales = {};
    filteredData.forEach(d => {
        if (!genreSales[d.Genre]) {
            genreSales[d.Genre] = 0;
        }
        genreSales[d.Genre] += d.Global_Sales;
    });

    // Convert grouped platform and genre sales into arrays for sorting
    const platformsArray = Object.keys(platformSales).map(platform => ({
        Platform: platform,
        Global_Sales: platformSales[platform],
    }));

    const genresArray = Object.keys(genreSales).map(genre => ({
        Genre: genre,
        Global_Sales: genreSales[genre],
    }));

    // Sort the arrays to get the highest-selling platforms and genres
    platformsArray.sort((a, b) => b.Global_Sales - a.Global_Sales);
    genresArray.sort((a, b) => b.Global_Sales - a.Global_Sales);

    // Show top 5 platforms and genres
    const topPlatforms = platformsArray.slice(0, 5);
    const topGenres = genresArray.slice(0, 5);

    // Create bar chart for top platforms
    const platformChartSpec = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "Top 5 Highest-Selling Platforms After 2010",
        title: "Top 5 Platforms (2010 and later)",
        data: { values: topPlatforms },
        mark: "bar",
        encoding: {
            x: { field: "Platform", type: "ordinal", title: "Platform" },
            y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
            tooltip: [
                { field: "Platform", type: "nominal", title: "Platform" },
                { field: "Global_Sales", type: "quantitative", title: "Global Sales (Millions)" }
            ]
        },
    };

    // Create bar chart for top genres
    const genreChartSpec = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "Top 5 Highest-Selling Genres After 2010",
        title: "Top 5 Genres (2010 and later)",
        data: { values: topGenres },
        mark: "bar",
        encoding: {
            x: { field: "Genre", type: "ordinal", title: "Genre" },
            y: { field: "Global_Sales", type: "quantitative", title: "Global Sales (in millions)" },
            tooltip: [
                { field: "Genre", type: "nominal", title: "Genre" },
                { field: "Global_Sales", type: "quantitative", title: "Global Sales (Millions)" }
            ]
        },
    };

    // Embed both charts
    vegaEmbed("#platformChart", platformChartSpec);
    vegaEmbed("#genreChart", genreChartSpec);
}

// Call the function to load data and create the charts
a2010story();

async function loadPieCharts() {
    // Load the CSV data
    const data = await d3.csv("./dataset/videogames_wide.csv");

    // Filter data for year 2000 and 2010
    const data2000 = data.filter(d => d.Year === "2000");
    const data2010 = data.filter(d => d.Year === "2010");

    // Aggregate sales by platform for the year 2000
    const platformSales2000 = {};
    data2000.forEach(d => {
        if (!platformSales2000[d.Platform]) {
            platformSales2000[d.Platform] = 0;
        }
        platformSales2000[d.Platform] += +d.Global_Sales;
    });

    // Prepare data in a format for Vega-Lite
    const formattedData2000 = Object.entries(platformSales2000).map(([platform, sales]) => ({
        Platform: platform,
        Global_Sales: sales,
    }));

    // Vega-Lite spec for pie chart 2000
    const pieChart2000 = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        title: "Highest Selling Platforms in 2000",
        data: { values: formattedData2000 },
        mark: "arc",
        encoding: {
            theta: { field: "Global_Sales", type: "quantitative", aggregate: "sum" },
            color: { field: "Platform", type: "nominal" },
            tooltip: [{ field: "Platform", title: "Platform" }, { field: "Global_Sales", title: "Global Sales (Millions)" }]
        },
        view: { stroke: null }
    };

    // Embed pie chart for 2000
    vegaEmbed("#platformPie2000", pieChart2000);

    // Aggregate sales by platform for the year 2010
    const platformSales2010 = {};
    data2010.forEach(d => {
        if (!platformSales2010[d.Platform]) {
            platformSales2010[d.Platform] = 0;
        }
        platformSales2010[d.Platform] += +d.Global_Sales;
    });

    // Prepare data in a format for Vega-Lite
    const formattedData2010 = Object.entries(platformSales2010).map(([platform, sales]) => ({
        Platform: platform,
        Global_Sales: sales,
    }));

    // Vega-Lite spec for pie chart 2010
    const pieChart2010 = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        title: "Highest Selling Platforms in 2010",
        data: { values: formattedData2010 },
        mark: "arc",
        encoding: {
            theta: { field: "Global_Sales", type: "quantitative", aggregate: "sum" },
            color: { field: "Platform", type: "nominal" },
            tooltip: [{ field: "Platform", title: "Platform" }, { field: "Global_Sales", title: "Global Sales (Millions)" }]
        },
        view: { stroke: null }
    };

    // Embed pie chart for 2010
    vegaEmbed("#platformPie2010", pieChart2010);
}

// Call the function to load data and render the pie charts
loadPieCharts();