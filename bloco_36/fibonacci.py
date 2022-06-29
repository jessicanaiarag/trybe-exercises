# implementar a sequencia de fibonacci recursiva


def fibo(n):
  if n < 2:
    print("ativou 1")
    return n
  else: 
    print("ativou 2")
    return fibo(n-1) + fibo(n-2)    

if __name__ == "__main__":
  print(fibo(5))