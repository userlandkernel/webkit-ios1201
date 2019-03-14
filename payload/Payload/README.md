#  iOS 12.0.1 Webkit Exploit

## About
This exploit is build on the work of Linus Henze, Niklas Baumstark and Luca Todesco.  
Linus released an exploit for a bug in regex.  
With this exploit it is possible to gain arbitrary code execution in the safari browser.  
The exploit makes use of a special JITMemcpy as demonstrated by Niklas Baumstark in iOS 11.3.1.  
This is necessary due to the executable memory mappings in JavaScriptCore's JIT being RO, unless copied to the special region using this performJITMemcpy.  
A ROP chain is used to overwrite a HTML Div element.   
This opens a possibility to bootstrap the payload, a mach-o file containing the voucher_swap exploit.  
From that point kernel privileges can be achieved and patches can be done to security checks.  


