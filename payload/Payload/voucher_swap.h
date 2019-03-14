#ifndef sploit_h
#define sploit_h
#include <mach/mach.h>
#include "common.h"
kern_return_t exploit(offsets_t *offsets, task_t *tfp0, uint64_t *kbase);
#endif
