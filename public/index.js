fetch( "https://aemauthor951-01.msa.adobevlab.com/graphql/execute.json/cbp/getScreens")
.then(response => response.json())
.then(response => {
    console.log(response);
})