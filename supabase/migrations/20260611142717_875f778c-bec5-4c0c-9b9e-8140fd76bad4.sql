CREATE TABLE public.kontakt_poruke (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ime text NOT NULL,
  email text NOT NULL,
  telefon text,
  poruka text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.kontakt_poruke TO anon, authenticated;
GRANT ALL ON public.kontakt_poruke TO service_role;
ALTER TABLE public.kontakt_poruke ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact messages"
  ON public.kontakt_poruke FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(ime) between 1 and 100
    AND length(email) between 3 and 255
    AND length(poruka) between 1 and 2000
    AND (telefon IS NULL OR length(telefon) <= 30)
  );