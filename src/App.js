import "./App.css";
import "./bootstrap.min.css";
import Card from "./table";
import 'font-awesome/css/font-awesome.min.css'

const data = [
  {
    tier: "FREE",
    price: "$0",
    features: [
      {
        name: "Single User",
        flag: "true",
      },
      {
        name: "5GB Storage",
        flag: "true",
      },
      {
        name: "Unlimited Public Projects",
        flag: "true",
      },
      {
        name: "Community Access",
        flag: "true",
      },
      {
        name: "Unlimited Private Projects",
        flag: "false",
      },
      {
        name: "Dedicated Phone Support",
        flag: "false",
      },
      {
        name: "Free Subdomain",
        flag: "false",
      },
      {
        name: "Monthly Status Reports",
        flag: "false",
      },
    ],
  },
  {
    tier: "PLUS",
    price: "$9",
    features: [
      {
        name: "5 Users",
        flag: "true",
      },
      {
        name: "50GB Storage",
        flag: "true",
      },
      {
        name: "Unlimited Public Projects",
        flag: "true",
      },
      {
        name: "Community Access",
        flag: "true",
      },
      {
        name: "Unlimited Private Projects",
        flag: "true",
      },
      {
        name: "Dedicated Phone Support",
        flag: "true",
      },
      {
        name: "Free Subdomain",
        flag: "true",
      },
      {
        name: "Monthly Status Reports",
        flag: "false",
      },
    ],
  },
  {
    tier: "Pro",
    price: "$49",
    features: [
      {
        name: "Unlimited User",
        flag: "true",
      },
      {
        name: "150GB Storage",
        flag: "true",
      },
      {
        name: "Unlimited Public Projects",
        flag: "true",
      },
      {
        name: "Community Access",
        flag: "true",
      },
      {
        name: "Unlimited Private Projects",
        flag: "true",
      },
      {
        name: "Dedicated Phone Support",
        flag: "true",
      },
      {
        name: "Unlimited Free Subdomain",
        flag: "true",
      },
      {
        name: "Monthly Status Reports",
        flag: "true",
      },
    ],
  },
];
function App() 
{
  return (
      <div className="container">
        <div className="row">
          { 
            data.map( ele => <Card key= {ele.name} data={ele}/>)
          }
        </div>
      </div>
  );
}

export default App;