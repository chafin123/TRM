const getData = async (sheet, dataState, errorState, loadingState) => {
    try {
        const response = await fetch(
                `https://api.sheety.co/b6dbcc47ec9ab905fd53f75df4e9a1c0/restaurantMenu/${sheet}`
                );
                if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            console.log(actualData[sheet]);

            console.log("worked");
            console.log(groupedData);
            {dataState}(groupedData);
            {errorState}(null);
        } catch(err) {
            {errorState}(err.message);
            {dataState}(null);
        } finally {
            {loadingState}(false);
        }
    }
  export default getData;