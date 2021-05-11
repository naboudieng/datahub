(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(165)),o={title:"Frontend",hide_title:!0,slug:"/datahub-frontend",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/README.md"},l={unversionedId:"datahub-frontend/README",id:"datahub-frontend/README",isDocsHomePage:!1,title:"Frontend",description:"DataHub Frontend",source:"@site/genDocs/datahub-frontend/README.md",slug:"/datahub-frontend",permalink:"/docs/datahub-frontend",editUrl:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/README.md",version:"current",sidebar:"overviewSidebar",previous:{title:"React App",permalink:"/docs/datahub-web-react"},next:{title:"GraphQL Core",permalink:"/docs/datahub-graphql-core"}},s=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Start via Docker image",id:"start-via-docker-image",children:[]},{value:"Start via command line",id:"start-via-command-line",children:[]},{value:"Checking out DataHub UI",id:"checking-out-datahub-ui",children:[]},{value:"Sample API calls",id:"sample-api-calls",children:[{value:"Browse APIs",id:"browse-apis",children:[]},{value:"Search APIs",id:"search-apis",children:[]},{value:"Dataset APIs",id:"dataset-apis",children:[]},{value:"User APIs",id:"user-apis",children:[]}]},{value:"Authentication",id:"authentication",children:[{value:"Authentication in React",id:"authentication-in-react",children:[]},{value:"API Debugging",id:"api-debugging",children:[]}]}],c={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"datahub-frontend"},"DataHub Frontend"),Object(r.b)("p",null,"DataHub frontend is a ",Object(r.b)("a",{parentName:"p",href:"https://www.playframework.com/"},"Play")," service written in Java. It is served as a mid-tier\nbetween ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms"},"DataHub GMS")," which is the backend service and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-web"},"DataHub Web"),"."),Object(r.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You need to have ",Object(r.b)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8"),"\ninstalled on your machine to be able to build ",Object(r.b)("inlineCode",{parentName:"li"},"DataHub Frontend"),"."),Object(r.b)("li",{parentName:"ul"},"You need to have ",Object(r.b)("a",{parentName:"li",href:"https://www.google.com/chrome/"},"Chrome")," web browser\ninstalled to be able to build because UI tests have a dependency on ",Object(r.b)("inlineCode",{parentName:"li"},"Google Chrome"),".")),Object(r.b)("h2",{id:"build"},"Build"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DataHub Frontend")," is already built as part of top level build:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"./gradlew build\n")),Object(r.b)("p",null,"However, if you only want to build ",Object(r.b)("inlineCode",{parentName:"p"},"DataHub Frontend")," specifically:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"./gradlew :datahub-frontend:build\n")),Object(r.b)("h2",{id:"dependencies"},"Dependencies"),Object(r.b)("p",null,"Before starting ",Object(r.b)("inlineCode",{parentName:"p"},"DataHub Frontend"),", you need to make sure that ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms"},"DataHub GMS")," and\nall its dependencies have already started and running."),Object(r.b)("p",null,"Also, user information should already be registered into the DB,\notherwise user will not be able to sign in.\nTo do that, first create a file named ",Object(r.b)("inlineCode",{parentName:"p"},"user.dat")," containing below line and filling the parts ",Object(r.b)("inlineCode",{parentName:"p"},"<<something>>"),"\nwith your information:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{"auditHeader": None, "proposedSnapshot": ("com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot", {"urn": "urn:li:corpuser:<<username>>", "aspects": [{"active": True, "fullName": "<<Full Name>>", "email": "<<e-mail address>>"}, {}]}), "proposedDelta": None}\n')),Object(r.b)("p",null,"And run ",Object(r.b)("inlineCode",{parentName:"p"},"mce producer")," script as below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"python metadata-ingestion/mce_cli.py produce -d user.dat\n")),Object(r.b)("p",null,"Or, you can run the script without providing any data file. In this case, the script will use ",Object(r.b)("inlineCode",{parentName:"p"},"bootstrap_mce.dat")," file\nto bootstrap some sample users and datasets:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"python metadata-ingestion/mce_cli.py produce\n")),Object(r.b)("p",null,"This will create a default user with username ",Object(r.b)("inlineCode",{parentName:"p"},"datahub"),". You can sign in to the app using ",Object(r.b)("inlineCode",{parentName:"p"},"datahub")," as your username."),Object(r.b)("h2",{id:"start-via-docker-image"},"Start via Docker image"),Object(r.b)("p",null,"Quickest way to try out ",Object(r.b)("inlineCode",{parentName:"p"},"DataHub Frontend")," is running the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-frontend"},"Docker image"),"."),Object(r.b)("h2",{id:"start-via-command-line"},"Start via command line"),Object(r.b)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",Object(r.b)("a",{parentName:"p",href:"#build"},"build"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cd datahub-frontend/run && ./run-local-frontend\n")),Object(r.b)("h2",{id:"checking-out-datahub-ui"},"Checking out DataHub UI"),Object(r.b)("p",null,"After starting your application in one of the two ways mentioned above, you can connect to it by typing below\ninto your favorite web browser:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"http://localhost:9001\n")),Object(r.b)("p",null,"To be able to sign in, you need to provide your user name. You don't need to type any password."),Object(r.b)("h2",{id:"sample-api-calls"},"Sample API calls"),Object(r.b)("p",null,"All APIs for the application are defined in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/conf/routes"},"routes")," file. Below, you can find sample curl calls to these APIs\nand their responses."),Object(r.b)("h3",{id:"browse-apis"},"Browse APIs"),Object(r.b)("h4",{id:"getting-current-browse-path"},"Getting current browse path"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v2/browsePaths?type=dataset&urn=urn:li:dataset:(urn:li:dataPlatform:kafka,pageviews,PROD)\n[\n"/PROD/kafka/pageviews"\n]\n')),Object(r.b)("h4",{id:"browsing-datasets"},"Browsing datasets"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v2/browse?type=dataset&path=/prod\n{\n    "elements": [],\n    "start": 0,\n    "count": 0,\n    "total": 1,\n    "metadata": {\n        "totalNumEntities": 1,\n        "path": "",\n        "groups": [{\n            "name": "prod",\n            "count": 1\n        }]\n    }\n}\n')),Object(r.b)("h3",{id:"search-apis"},"Search APIs"),Object(r.b)("h4",{id:"search-query"},"Search query"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v2/search?type=dataset&input=page\n{\n    "elements": [{\n        "origin": "PROD",\n        "name": "pageviews",\n        "platform": "urn:li:dataPlatform:kafka"\n    }],\n    "start": 0,\n    "count": 10,\n    "total": 1,\n    "searchResultMetadatas": [{\n        "name": "platform",\n        "aggregations": {\n            "kafka": 1\n        }\n    }, {\n        "name": "origin",\n        "aggregations": {\n            "prod": 1\n        }\n    }]\n}\n')),Object(r.b)("h4",{id:"autocomplete-query"},"Autocomplete query"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v2/autocomplete?type=dataset&field=name&input=page\n{\n    "query": "page",\n    "suggestions": ["pageviews"]\n}\n')),Object(r.b)("h3",{id:"dataset-apis"},"Dataset APIs"),Object(r.b)("h4",{id:"getting-basic-dataset-metadata"},"Getting basic dataset metadata"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v2/datasets/urn:li:dataset:(urn:li:dataPlatform:kafka,pageviewsevent,PROD)\n{\n    "dataset": {\n        "platform": "kafka",\n        "nativeName": "pageviewsevent",\n        "fabric": "PROD",\n        "uri": "urn:li:dataset:(urn:li:dataPlatform:kafka,pageviewsevent,PROD)",\n        "description": "",\n        "nativeType": null,\n        "properties": null,\n        "tags": [],\n        "removed": null,\n        "deprecated": null,\n        "deprecationNote": null,\n        "decommissionTime": null,\n        "createdTime": null,\n        "modifiedTime": null\n    }\n}\n')),Object(r.b)("h4",{id:"getting-dataset-schema"},"Getting dataset schema"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v2/datasets/urn:li:dataset:(urn:li:dataPlatform:kafka,pageviews,PROD)/schema\n{\n    "schema": {\n        "schemaless": false,\n        "rawSchema": "{\\"type\\":\\"record\\",\\"name\\":\\"MetadataChangeEvent\\",\\"namespace\\":\\"com.linkedin.pegasus2avro.mxe\\",\\"doc\\":\\"Kafka event for proposing a metadata change for an entity.\\",\\"fields\\":[{\\"name\\":\\"auditHeader\\",\\"type\\":{\\"type\\":\\"record\\",\\"name\\":\\"KafkaAuditHeader\\",\\"namespace\\":\\"com.linkedin.pegasus2avro.avro2pegasus.events\\",\\"doc\\":\\"Header\\"}}]}",\n        "keySchema": null,\n        "columns": [{\n            "id": null,\n            "sortID": 0,\n            "parentSortID": 0,\n            "fieldName": "foo",\n            "parentPath": null,\n            "fullFieldPath": "foo",\n            "dataType": "string",\n            "comment": "Bar",\n            "commentCount": null,\n            "partitionedStr": null,\n            "partitioned": false,\n            "nullableStr": null,\n            "nullable": false,\n            "indexedStr": null,\n            "indexed": false,\n            "distributedStr": null,\n            "distributed": false,\n            "treeGridClass": null\n        }],\n        "lastModified": 0\n    }\n}\n')),Object(r.b)("h4",{id:"getting-owners-of-a-dataset"},"Getting owners of a dataset"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v2/datasets/urn:li:dataset:(urn:li:dataPlatform:kafka,pageviews,PROD)/owners\n{\n    "owners": [{\n        "userName": "ksahin",\n        "source": "UI",\n        "namespace": "urn:li:corpuser",\n        "name": "Kerem Sahin",\n        "email": "ksahin@linkedin.com",\n        "isGroup": false,\n        "isActive": true,\n        "idType": "USER",\n        "type": "DataOwner",\n        "subType": null,\n        "sortId": null,\n        "sourceUrl": null,\n        "confirmedBy": "UI",\n        "modifiedTime": 0\n    }, {\n        "userName": "datahub",\n        "source": "UI",\n        "namespace": "urn:li:corpuser",\n        "name": "Data Hub",\n        "email": "datahub@linkedin.com",\n        "isGroup": false,\n        "isActive": true,\n        "idType": "USER",\n        "type": "DataOwner",\n        "subType": null,\n        "sortId": null,\n        "sourceUrl": null,\n        "confirmedBy": "UI",\n        "modifiedTime": 0\n    }],\n    "fromUpstream": false,\n    "datasetUrn": "urn:li:dataset:(urn:li:dataPlatform:kafka,pageviews,PROD)",\n    "lastModified": 0,\n    "actor": "ksahin"\n}\n')),Object(r.b)("h4",{id:"getting-dataset-documents"},"Getting dataset documents"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v2/datasets/urn:li:dataset:(urn:li:dataPlatform:kafka,pageviews,PROD)/institutionalmemory\n{\n    "elements": [{\n        "description": "Sample doc",\n        "createStamp": {\n            "actor": "urn:li:corpuser:ksahin",\n            "time": 0\n        },\n        "url": "https://www.linkedin.com"\n    }]\n}\n')),Object(r.b)("h4",{id:"getting-upstreams-of-a-dataset"},"Getting upstreams of a dataset"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v2/datasets/urn:li:dataset:(urn:li:dataPlatform:kafka,pageviews,PROD)/upstreams\n[{\n    "dataset": {\n        "platform": "kafka",\n        "nativeName": "pageViewsUpstream",\n        "fabric": "PROD",\n        "uri": "urn:li:dataset:(urn:li:dataPlatform:kafka,pageViewsUpstream,PROD)",\n        "description": "",\n        "nativeType": null,\n        "properties": null,\n        "tags": [],\n        "removed": null,\n        "deprecated": null,\n        "deprecationNote": null,\n        "decommissionTime": null,\n        "createdTime": null,\n        "modifiedTime": null\n    },\n    "type": "TRANSFORMED",\n    "actor": "urn:li:corpuser:ksahin",\n    "modified": null\n}]\n')),Object(r.b)("h3",{id:"user-apis"},"User APIs"),Object(r.b)("h4",{id:"getting-basic-user-metadata"},"Getting basic user metadata"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v1/user/me\n{\n    "user": {\n        "id": 0,\n        "userName": "ksahin",\n        "departmentNum": 0,\n        "email": "ksahin@linkedin.com",\n        "name": "Kerem Sahin",\n        "pictureLink": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",\n        "userSetting": null\n    },\n    "status": "ok"\n}\n')),Object(r.b)("h4",{id:"getting-all-users"},"Getting all users"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'http://localhost:9001/api/v1/party/entities\n{\n    "status": "ok",\n    "userEntities": [{\n        "label": "ksahin",\n        "category": "person",\n        "displayName": null,\n        "pictureLink": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"\n    }, {\n        "label": "datahub",\n        "category": "person",\n        "displayName": null,\n        "pictureLink": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"\n    }]\n}\n')),Object(r.b)("h2",{id:"authentication"},"Authentication"),Object(r.b)("p",null,"DataHub frontend leverages ",Object(r.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/technotes/guides/security/jaas/JAASRefGuide.html"},"Java Authentication and Authorization Service (JAAS)")," to perform the authentication. By default we provided a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/app/security/DummyLoginModule.java"},"DummyLoginModule")," which will accept any username/password combination. You can update ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/conf/jaas.conf"},"jaas.conf")," to match your authentication requirement. For example, use the following config for LDAP-based authentication,"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'WHZ-Authentication {\n\xa0\xa0com.sun.security.auth.module.LdapLoginModule sufficient\n\xa0\xa0userProvider="ldaps://<host>:636/dc=<domain>"\n\xa0\xa0authIdentity="{USERNAME}"\n\xa0\xa0userFilter="(&(objectClass=person)(uid={USERNAME}))"\n\xa0\xa0java.naming.security.authentication="simple"\n\xa0\xa0debug="false"\n\xa0\xa0useSSL="true";\n};\n')),Object(r.b)("h3",{id:"authentication-in-react"},"Authentication in React"),Object(r.b)("p",null,"The React app supports both JAAS as described above and separately OIDC authentication. To learn about configuring OIDC for React,\nsee the ",Object(r.b)("a",{parentName:"p",href:"/docs/how/configure-oidc-react"},"OIDC in React")," document. "),Object(r.b)("h3",{id:"api-debugging"},"API Debugging"),Object(r.b)("p",null,"Most DataHub frontend API endpoints are protected using ",Object(r.b)("a",{parentName:"p",href:"https://www.playframework.com/documentation/2.1.0/JavaGuide4"},"Play Authentication"),", which means it requires authentication information stored in the cookie for the request to go through. This makes debugging using curl difficult. One option is to first make a curl call against the ",Object(r.b)("inlineCode",{parentName:"p"},"/authenticate")," endpoint and stores the authentication info in a cookie file like this"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'curl -c cookie.txt -d \'{"username":"datahub", "password":"datahub"}\' -H \'Content-Type: application/json\' http://localhost:9001/authenticate\n')),Object(r.b)("p",null,"You can then make all subsequent calls using the same cookie file to pass the authentication check."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'curl -b cookie.txt "http://localhost:9001/api/v2/search?type=dataset&input=page"\n')))}u.isMDXComponent=!0}}]);