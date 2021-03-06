ObjectID = require('mongodb').ObjectID;

function getFixture(num){
    const b64content = "CgpMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gc2VkIGp1c3RvIHF1aXMgdG9ydG9yIGNvbW1vZG8gdGluY2lkdW50IGFjIG5vbiBhdWd1ZS4gUGVsbGVudGVzcXVlIGlhY3VsaXMgdHVycGlzIHNpdCBhbWV0IHRyaXN0aXF1ZSBtb2xlc3RpZS4gQWxpcXVhbSBlZmZpY2l0dXIgdmVuZW5hdGlzIGRpYW0gbm9uIGRpY3R1bS4gUXVpc3F1ZSBhdCBmZWxpcyB2aXRhZSBlc3QgZnJpbmdpbGxhIHZpdmVycmEuIFByYWVzZW50IGlwc3VtIGZlbGlzLCBkaWN0dW0gZWdldCBjb25zZXF1YXQgcXVpcywgcG9zdWVyZSBjb252YWxsaXMgb3JjaS4gUHJhZXNlbnQgaWFjdWxpcyBsb2JvcnRpcyBvZGlvIGEgdWxsYW1jb3JwZXIuIE51bmMgc29kYWxlcyBuaXNpIG5lcXVlLCBhYyBhbGlxdWV0IGFyY3UgcGhhcmV0cmEgZXQuIFF1aXNxdWUgZmluaWJ1cyBuaXNpIGV1IGVuaW0gc2NlbGVyaXNxdWUgbWF0dGlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gdGVsbHVzIG1pLCBzdXNjaXBpdCBuZWMgcGhhcmV0cmEgdmVsLCBzb2RhbGVzIGV1IGZlbGlzLiBDcmFzIHJob25jdXMgZXUgbWF1cmlzIGEgbW9sbGlzLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFV0IGV1IGxpZ3VsYSBxdWlzIHRvcnRvciB1bGxhbWNvcnBlciBwZWxsZW50ZXNxdWUuCgpTZWQgdXQgc2VtIGVnZXQgbGFjdXMgc29sbGljaXR1ZGluIGdyYXZpZGEgYSBhYyB2ZWxpdC4gTmFtIGVuaW0gc2FwaWVuLCBwb3J0YSB2ZWhpY3VsYSBsZW8gcXVpcywgaWFjdWxpcyBjb25zZWN0ZXR1ciBudWxsYS4gVml2YW11cyBpbiBkaWFtIGV0IGxlY3R1cyBwdWx2aW5hciB2dWxwdXRhdGUuIEFlbmVhbiB2dWxwdXRhdGUgcmhvbmN1cyBkdWksIGF0IHJ1dHJ1bSBudW5jIHRyaXN0aXF1ZSBhYy4gTW9yYmkgdnVscHV0YXRlIHRlbGx1cyBldSBkdWkgdGluY2lkdW50IHVsdHJpY2llcy4gU2VkIGluIGxpYmVybyBpZCBtYWduYSB2b2x1dHBhdCBsdWN0dXMgbHVjdHVzIHZlbCBmZWxpcy4gRG9uZWMgbGVvIGFudGUsIHBsYWNlcmF0IGFjIHRvcnRvciBub24sIHBoYXJldHJhIGRpY3R1bSBvcmNpLgoKQWxpcXVhbSBwb3J0YSBlbGl0IGF1Z3VlLCBpZCBjb25kaW1lbnR1bSBpcHN1bSBlZmZpY2l0dXIgcXVpcy4gVml2YW11cyBjb25kaW1lbnR1bSwgb3JjaSBxdWlzIGVmZmljaXR1ciBkYXBpYnVzLCBhcmN1IGV4IG9ybmFyZSBhbnRlLCB2ZWwgZmluaWJ1cyBudWxsYSBlbmltIHZlbCBtYWduYS4gQWxpcXVhbSBzY2VsZXJpc3F1ZSBhY2N1bXNhbiBsaWJlcm8gaW4gYmxhbmRpdC4gTWF1cmlzIGxhY2luaWEsIG9kaW8gdXQgZmluaWJ1cyBlZmZpY2l0dXIsIHR1cnBpcyBsb3JlbSBoZW5kcmVyaXQgZHVpLCBpYWN1bGlzIHB1bHZpbmFyIG5pc2kgdGVsbHVzIHV0IG51bmMuIEludGVnZXIgdXQgbWFsZXN1YWRhIGF1Z3VlLCBhIGx1Y3R1cyBlbmltLiBEb25lYyBlbGVpZmVuZCByaXN1cyBhIGZpbmlidXMgdGVtcG9yLiBEdWlzIHZlaGljdWxhIHZpdmVycmEgbGlndWxhIHF1aXMgcG9ydHRpdG9yLiBWaXZhbXVzIGNvbmd1ZSBkaWFtIHV0IHNvZGFsZXMgcG9ydHRpdG9yLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIERvbmVjIGR1aSBtYXNzYSwgY3Vyc3VzIG5vbiB1bHRyaWNpZXMgc2VkLCBwbGFjZXJhdCBpZCBvZGlvLiBRdWlzcXVlIGludGVyZHVtIG9yY2kgbmVxdWUsIHNpdCBhbWV0IG1vbGVzdGllIHF1YW0gdGVtcG9yIGlkLiBDdXJhYml0dXIgY29tbW9kbyBlbmltIGxlY3R1cy4gRXRpYW0gc3VzY2lwaXQgcnV0cnVtIHRvcnRvciwgYSBmcmluZ2lsbGEgYXJjdSB1bGxhbWNvcnBlciB1dC4gQ3VyYWJpdHVyIG5vbiBkb2xvciB2aXRhZSBkb2xvciB0aW5jaWR1bnQgbW9sbGlzLgoKSW50ZWdlciBzdXNjaXBpdCBoZW5kcmVyaXQgbWFnbmEsIHV0IGNvbnNlcXVhdCBlbmltLiBTZWQgZXQgZWxlbWVudHVtIG1pLiBNYWVjZW5hcyBlbGVpZmVuZCBtaSBpcHN1bSwgZGFwaWJ1cyBjb25zZWN0ZXR1ciBmZWxpcyBjb25ndWUgYS4gRG9uZWMgdml0YWUgZmVybWVudHVtIGR1aS4gSW4gcGxhY2VyYXQsIG9yY2kgdXQgaWFjdWxpcyBzb2xsaWNpdHVkaW4sIG1hc3NhIHJpc3VzIGZldWdpYXQgYXJjdSwgc2l0IGFtZXQgYmxhbmRpdCBvcmNpIG1ldHVzIGV1IGxvcmVtLiBEdWlzIG9ybmFyZSBtYXR0aXMgZWxpdCBhIHVsbGFtY29ycGVyLiBTZWQgdXQgdXJuYSB2dWxwdXRhdGUgc2VtIHBvcnRhIGx1Y3R1cy4gRG9uZWMgZWxpdCBuZXF1ZSwgc2NlbGVyaXNxdWUgYXQgZXN0IHZpdGFlLCBldWlzbW9kIHZpdmVycmEgdGVsbHVzLiBQcmFlc2VudCB2ZWhpY3VsYSwgZmVsaXMgc2VkIHRpbmNpZHVudCBpbXBlcmRpZXQsIHNlbSBudWxsYSBjb25zZWN0ZXR1ciBmZWxpcywgc2VkIGFsaXF1ZXQgbGVvIHVybmEgZWdldCBsZWN0dXMuIFV0IGRpYW0gbGlndWxhLCBhY2N1bXNhbiB2ZWwgZmV1Z2lhdCBuZWMsIHNvbGxpY2l0dWRpbiBhIHF1YW0uIENyYXMgbG9yZW0gZXJvcywgZnJpbmdpbGxhIGV0IHBvcnRhIGlkLCBzb2xsaWNpdHVkaW4gZXUgbGVjdHVzLiBWZXN0aWJ1bHVtIGEgZXJvcyBxdWFtLiBVdCB0ZW1wb3IgdmVsaXQgbmlzbCwgaWQgc29kYWxlcyBlbmltIGxvYm9ydGlzIGZyaW5naWxsYS4gQWxpcXVhbSBwb3N1ZXJlIHBsYWNlcmF0IG5pYmggbm9uIGx1Y3R1cy4gRHVpcyBmZXJtZW50dW0gYXQgbnVsbGEgZWdldCB2ZXN0aWJ1bHVtLiBNYWVjZW5hcyBhIHVybmEgdWx0cmljZXMgZXJvcyBtb2xlc3RpZSBpbXBlcmRpZXQuCgpQcmFlc2VudCBpbiBtYXVyaXMgc29sbGljaXR1ZGluLCBpbnRlcmR1bSBtYXVyaXMgdXQsIGVmZmljaXR1ciBkaWFtLiBGdXNjZSBsYW9yZWV0IG5pc2wgbnVuYy4gQWxpcXVhbSBpbnRlcmR1bSBhY2N1bXNhbiBtaSBxdWlzIHJ1dHJ1bS4gRHVpcyBpbiBhcmN1IHNlZCBhdWd1ZSBpbXBlcmRpZXQgZGlnbmlzc2ltIGlkIHZpdGFlIGRvbG9yLiBQZWxsZW50ZXNxdWUgbWFsZXN1YWRhIGp1c3RvIHNlZCBlcm9zIGNvbnNlcXVhdCwgZXUgbG9ib3J0aXMgbWFnbmEgcHVsdmluYXIuIERvbmVjIGF1Y3RvciBvZGlvIG5lYyBtYWduYSBmZXJtZW50dW0gcG9ydHRpdG9yLiBEdWlzIGZldWdpYXQgYXVjdG9yIHNhZ2l0dGlzLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFF1aXNxdWUgcXVpcyBuaXNsIGF1Y3RvciwgbW9sbGlzIG1hZ25hIGVsZWlmZW5kLCBlbGVpZmVuZCBsaWd1bGEuIE51bmMgcGxhY2VyYXQgb2RpbyBpZCBuZXF1ZSBlbGVtZW50dW0sIHF1aXMgZGFwaWJ1cyBlcmF0IG1hdHRpcy4gTnVsbGFtIHRlbXBvciBzYXBpZW4gZWdldCBmcmluZ2lsbGEgcG9zdWVyZS4gQ3VyYWJpdHVyIHZlbmVuYXRpcyBzYXBpZW4gZXQgbmlzbCB2ZXN0aWJ1bHVtIHVsdHJpY2VzLiBRdWlzcXVlIGJsYW5kaXQgZXggYXQgbG9yZW0gc2FnaXR0aXMgcG9ydHRpdG9yLiBEdWlzIGNvbnNlY3RldHVyIGZyaW5naWxsYSBibGFuZGl0LiA="
    let buf = Buffer.from(b64content, 'base64');
    let document = {
        "_id": ObjectID(),
        title: num + " - Lorem Ipsum",
        content: buf.toString(),
        author: "Alexandre DUMAS",
        date: new Date()
    };
    return document;
}

module.exports = function(app) {
    app.get("/fixtures/play", async function (req, res) {
        try {
            await app.db.collection("articles").drop(function () {
                console.log("Collection dropped");
            });
        } catch (e) {
            console.log(e);
        }
        
        let response = {};
        for (let i = 0; i < 10; i++) {
            let fixture = getFixture(i);
            app.db.collection("articles").insertOne(fixture, function (err) {
                if (err) throw err;
                console.log("Fixture " + i + " played");
            });

        }
        response.Status = "Success";
        res.json(response);
    });
};
