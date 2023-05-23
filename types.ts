export type Users = User[];

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Posts = Post[];

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type Products = Product[];

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export type Articles = Article[];

export type Article = {
  id: number;
  title: string;
  description: string;
  category: string;
};

export type Dashboard = {
  posts: number;
  likes: number;
  followers: number;
  following: number;
};
