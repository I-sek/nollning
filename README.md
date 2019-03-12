nollning
========
The page used on https://nollning.isek.se

## Usage
All edits should be made here in the repo. When it is time to deploy the page, you just have to 
folllow the steps in the deployment section. After deploying, create a "release" here on GitHub and tag it with the current year as the version (e.g. "v2019").

## Deploying
1. Clone this repo (`git clone https://github.com/Isektionen-LTH/nollning.git`)
2. Remove the `.git` folder and the `.gitignore` file (they are hidden)
4. Archive old site
5. Upload to webhosting

## Notes
`weekData` is an array with week objects. This is an example of how a week object may look like:

```javascript
{
  title: "Vecka 0",
  days: [
    {
      header: "Upprop",
      body: "Lorem ipsum dolor sit amet",
      date: "2019-03-11",
      geo: "55.7109989,13.2072995"
    },
    {
      header: "Phaddermys",
      body: "Lorem ipsum dolor sit amet",
      date: "2019-03-12",
      geo: "55.7109491,13.2064024"
    },
    {
      header: "FlyING",
      body: "Lorem ipsum dolor sit amet",
      date: "2019-03-13",
      geo: "55.7109491,13.2064024"
    }
  ]
}
```
