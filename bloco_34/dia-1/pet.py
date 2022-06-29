class Pet():
  def __init__(self, nome, especie, idade, humano):
    self.nome = nome
    self.especie = especie
    self.idade = idade
    self.humano = humano

def __repr__(self):
  return f"""
  - Espécie do pet: {self.especie}
  - Nome do pet: {self.nome}
  - Idade do pet: {self.idade}
  - Pessoa responsável: {self.humano}
  """

thor = Pet('Thor', 'Gato', 5, 'Felps')

print(thor)