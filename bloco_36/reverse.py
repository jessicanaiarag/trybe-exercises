# implementar uma função que inverte uma lista de maneira recursiva


from re import I


def reverse(array):
  if len(array) <= 1:
    return array
  else:
    return [array[-1]] + reverse(array[:len(array)-1])

if __name__ == '__main__':
  print(reverse([1,2,3,4,5]))