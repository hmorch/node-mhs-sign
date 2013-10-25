# node-mhs-sign

Simple module to calculate Amazon AWS-style `Authorization` header for MapHub Service REST requests.

Simple it is: 
	
```javascript
var AwsSign = require('mhs-sign');
var signer = new AwsSign({ 
	accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
	secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
});

var opts = {
        host: 'tst.cmd.navteq.com',
        port: 80,
        path: '/maphub-service/layer/grp|tracks|Playground',
        method: 'GET',
        headers: {
            "content-type": 'application/vnd.navteq.layer+json',
            "date": 'Thu, 24 Oct 2013 15:55:06 GMT'
        }
};
signer.sign(opts);
http.request(opts, ...);
http.end();
```

The following keys are mandatory: 

* `method`
* `host`
* `path`

Others are optional. A date header (`headers.date`) will be added for you if it is not already set, but a `x-amz-date` will have preference.

## Credits

Originally based on node-aws-sign by Egor Egorov, me@egorfine.com (MIT License)
