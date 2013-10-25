var 
	util = require('util'),
	MhsSign = require('../');

var credentials = { 
	accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
	secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
};

// main test suite as per http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAuthentication.html#ConstructingTheAuthenticationHeader
exports['main'] = function(test) {
	test.expect(2);

	var signer = new MhsSign(credentials);
	var opts;

	// Example Object GET
	opts = {
        host: 'tst.cmd.navteq.com',
        port: 80,
        path: '/maphub-service/layer/grp|tracks|Playground',
        method: 'GET',
        headers: {
            "content-type": 'application/vnd.navteq.layer+json',
            "date": 'Thu, 24 Oct 2013 15:55:06 GMT'
        }
	}
	signer.sign(opts);
	test.equal(opts.headers["Authorization"], 'AWS AKIAIOSFODNN7EXAMPLE:vkX5t+bFZm9UTKDpORVY8bc5kVc=');


    // Example Object PUT

//    var bodyContent = {
//        "name":"MyLayer",
//        "description":"A Layer for my stuff",
//        "ownerId":"grp|me",
//        "title":"Best stuff in town"
//    }
//    var contentMd5 = crypto
//        .createHash('md5')
//        .update(bodyContent, 'utf8')
//        .digest('base64');

    opts = {
        host: 'tst.cmd.navteq.com',
        port: 80,
        path: '/maphub-service/layer/grp|tracks|Playground',
        method: 'POST',
        headers: {
            "content-type": 'application/vnd.navteq.layer+json',
            "content-md5": 'iXKsY3sbtRpzBA7DHu6nQA==', //contentMd5 for PUTs
            "date": 'Thu, 24 Oct 2013 15:55:06 GMT',
            "x-amz-date": 'Thu, 24 Oct 2013 15:55:06 GMT'
        }
    };
    signer.sign(opts);
    test.equal(opts.headers["Authorization"], 'AWS AKIAIOSFODNN7EXAMPLE:nuIT54Je4rVIkcRLO8du0gC6mOY=');


    test.done();
};
