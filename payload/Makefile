.PHONY: payload/payload.dylib

shellcode.js: shellcode.bin
	base64 -i Build/shellcode.bin -o Build/shellcode.b64
	echo "var shellcode64=atob(\"`cat Build/shellcode.b64 | tr -d '\n'`\");" | tr -d '\n' > Build/shellcode.js
	rm Build/shellcode.b64	

shellcode.bin: shellcode.s Build/payload.dylib Makefile
	#aarch64-linux-gnu-as -EL -o shellcode.o shellcode.s
	#aarch64-linux-gnu-objcopy -O binary shellcode.o shellcode.bin
	as -arch arm64 shellcode.s -o shellcode.o
	$(which gobjcopy) -Obinary shellcode.o shellcode.bin
	rm shellcode.o
	dd if=/dev/zero of=shellcode.bin bs=1 count=1 seek=4095
	cat Build/payload.dylib >> Build/shellcode.bin

shellcode.s: shellcode.in.s Build/payload.dylib Makefile
	python gen_shellcode.py

Build/payload.dylib:
	cd Payload && make

