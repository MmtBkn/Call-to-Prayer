# Call to Prayer
Simple Alexa skill which is calling Adhan when summoned. It could be used to play sound, music files. If you need more than playing single sound, check out;
https://github.com/alexa/skill-sample-nodejs-audio-player

#Usage
1. Create AWS Lambda function
2. Create alexa skill, (and connect it to lambda function)
3. Download this repository
4. Install npm packages `npm install`
5. Change 'itsTimeToPray' with name of your lambda function inside of package.json
6. Deploy changes to AWS Functions `npm run deploy`

# Test
If you don't have Echo device, test your skill using `https://echosim.io/`

#Troubleshooting
If mp3 is not served over https, It doesn't work. I uploaded file to Firebase.

1st and 2nd steps could be hard to figure out. I don't know when, but I'm planning to write blog post. You can email me to encourage.