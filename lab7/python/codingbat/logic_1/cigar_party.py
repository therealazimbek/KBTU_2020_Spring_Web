def cigar_party(cigars, is_weekend):
  if (cigars >= 40 and cigars <= 60) or (cigars >= 40 and is_weekend):
    return True
  else:
    return False
