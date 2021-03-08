//clientNodeFetch class is to interact with ehh AppScript Server Node.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
class httpServiceV2 { 


///it takes a inputobject and build's it into a encodedURI
static buildEncodedUri(request) {
    const response = [];
    for (let d in request) { response.push(encodeURIComponent(d) + '=' + encodeURIComponent(request[d])); }
    return response.join('&');
}

// unbuilds the URL parameters and returns an object
static unbuildEndodedUri(request) {
    var urifragment = request.split("&"), data = {}, i, parts;
    //process each parameter
    for (i = 0; i < urifragment.length; i++) {
        parts = urifragment[i].split("=");
        if (parts.length < 2) {
            parts.push("");
            console.log(parts);
        }
        data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }

    console.log("Returning from", arguments.callee.name, data);

    return data;
    }
 static serverNodeRequest(url, request) {
        if (e.target.id === 'get') {
            request.method = "GET";
            var encodedParam = clientNodeFetch.buildEncodedUri(request);
            var url2 = url + "?" + encodedParam;
            console.log(url2);
            clientNodeFetch.fetchUrl(url2);
        }
        if (e.target.id === 'post') {
            //request = getRequest;
            request.method = "POST";
            clientNodeFetch.fetchHttpRequest(url, request);
        }

        console.log(url, request)
        if (!request) {
            var req = url;
        } else {
            var req = [url, request]
        }
        fetch(req);
    }
    //This is a basic working version. 
    static fetchHttpRequest(url,request) {
        console.log("args", url, request)
        return fetch(url, )
        // .then(response => {
        //     if (!response.ok) { throw new Error("Could not reach website."); }
        //    // console.log("reponsetex", response.text())
        //     return response.text();
        // })
        // .then(json => console.log("fetchHttpRequest",json))
        // .catch(err => console.error(err));

}
//Added Response mutation as per the headers in response.
    static fetchUrl(url, request) {
        console.log(url, request)
        if (!request) {
            var req = url;
        } else {
            var req=[url,request]
        }
        fetch(req)
        .then(response => {
            const contentType = response.headers.get('content-type');
          //  console.log("headers", response.headers);
           // console.log("response Type is ", contentType);
            if (contentType.includes('application/json')) {
               console.log(contentType, "Caught Json",response);
                return response.json();
            }
            if (contentType.includes('text/html')) {
              //  console.log(contentType, "Caught HTML");
                return response.text();
            }
            if (contentType.includes('image/jpeg')) {
               // console.log(contentType, "Caught Image");
                response.blob()
                    .then(function (myBlob) {
                        var objectURL = URL.createObjectURL(myBlob);
                        let outputResponse = new Image();
                        outputResponse.src = objectURL;
                        document.getElementsByTagName('body')[0].appendChild(outputResponse)
                    });
            }
            if (contentType.includes('text/plain')) {
                console.log(contentType, "Caught Text", response.text());
                return response.text();
            }
        })
        .then(data => {
           // console.log("response of ", typeof data, data); /* process your data further */
        })
            .catch(error => console.log(error));
    //    return data;
}

}
console.log("I am Loaded httpServiceV2",)