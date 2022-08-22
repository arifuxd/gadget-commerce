import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "lqdhaxog",
  dataset: "production",
  apiVersion: "2022-08-21",
  useCdn: true,
  token:
    "skstFNEfQ60l5FMaVsbOPBI3VZKOWVcrTNQAxwmsXeWvowEE0NPLcVkS2enNa8m8EsWub0uX3HbnsmNzTMqgg73zqB6GiO75rsTC90lXH4enfZj0lGntfvwfhn7VGRIYdGvBpQVKJzt5dQo0GKnDkRrCdwtwSN04UHN6DQ0K09xp9kdzzLFk",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
