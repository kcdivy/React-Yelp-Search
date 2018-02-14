const apiKey = ''; // provide the API key from your Yelp application
export const Yelp = {
/*
// Implemented Yelp API integration with fetch->then
// Same implementation is done using async/await below

search(term, location, sortBy)
{
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                      {
                        headers : {
                          Authorization: `Bearer ${apiKey}`
                        }
                      }
                    )
                    .then(response=>response.json())
                    .then((jsonResponse)=>{
                      if(jsonResponse.businesses)
                      {
                        let searchResult = jsonResponse.businesses.map((business, index)=>{
                          return {  id: business.id,
                                    imageSrc: business.image_url,
                                    name: business.name,
                                    address: business.location.address1,
                                    city: business.location.city,
                                    state: business.location.state,
                                    zipCode: business.location.zip_code,
                                    category: business.categories[0].title,
                                    rating: business.rating,
                                    reviewCount: business.review_count};
                        });
                        return searchResult;
                      }
                    });
}
 */

async search(term, location, sortBy)
{
  let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                      {
                        headers : {
                          Authorization: `Bearer ${apiKey}`
                        }
                      }
                    );
  let jsonResponse = await response.json();
  if(jsonResponse.businesses)
  {
    let searchResult = jsonResponse.businesses.map((business, index)=>{
      return {  id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count};
    });
    return searchResult;
  };
}
};
