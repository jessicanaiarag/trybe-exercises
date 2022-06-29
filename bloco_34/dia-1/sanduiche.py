class Sanduiche:
  def __init__(self):
    self.sanduiche = ["pão", "queijo", "tomate"]

  def lista_ingredientes(self):
    return self._ingredientes

class SanduicheComCondimentos:
  def __init__(self, sanduiche):
    self.sanduiche = sanduiche
    self.condimentos = ["maionese", "ketchup"] 

  def lista_ingredientes(self):
    return self.sanduiche.lista_ingredientes() + self.condimentos

  def mais_ketchup(self):
    self.condimentos.append("ketchup")

sanduiche = Sanduiche()

sanduiche_com_condimentos = SanduicheComCondimentos(sanduiche)

print(sanduiche.lista_ingredientes())

print(sanduiche_com_condimentos.lista_ingredientes())


