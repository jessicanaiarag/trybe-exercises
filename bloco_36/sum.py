# implementar um somatório recursivo


def sum_before(n):
  if n == 0:
    return 0
  else:
    return n + sum_before(n-1)

if __name__ == 'main':
  print(sum_before(6))