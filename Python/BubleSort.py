def swap(alist, i, j):
    temp = alist[i]
    alist[i] = alist[j]
    alist[j] = temp

def bubbleSortAscending(alist):
    for passnum in range(0,len(alist)-1,1):
        for i in range (len(alist)-1,passnum,-1):
            if alist[i]<alist[i-1]:
                swap(alist, i, i-1)

def bubbleSortDescending(alist):
    for passnum in range(len(alist)-1,0,-1):
        for i in range(passnum):
            if alist[i]>alist[i+1]:
                swap(alist, i, i+1)

alist = [54,26,93,17,77,31,44,55,20]
bubbleSortDescending(alist)
print(alist)
alist = [54,26,93,17,77,31,44,55,20]
bubbleSortAscending(alist)
print(alist)
