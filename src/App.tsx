import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ProductGrid } from './components/productGrid';
import { Accordion } from './components/accordion';
import { Header } from './components/header';

const client = new ApolloClient({
  uri: 'https://mock.shop/api', 
  cache: new InMemoryCache(),
});

const items = [
  { title: 'How do I know if the cap I want is in stock?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: `Can you tell me if you're getting an item back in stock?`, text: 'We do restock certain styles on a regular basis but cannot guarantee all styles/sizes will become available. The best way to be sure is to send us information on the product and we can let you know when we might expect more back in. Due to the huge range of caps we offer, we are confident however, that we will have something in stock to suit your requirements.' },
  { title: 'What types of payment do you take?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

function App() {

  return (
    <>
     <ApolloProvider client={client}>
      <div>
        <Header preheader="// SPRING SUMMER 24" header="EXPLORE THE RANGE" />
        <ProductGrid />
        <Accordion preheader="// FREQUENTLY ASKED QUESTIONS" header="EVERYTHING AROUND PRODUCT, ORDER AND DELIVERY" items={items} />
      </div>
    </ApolloProvider>
    </>
  )
}

export default App
