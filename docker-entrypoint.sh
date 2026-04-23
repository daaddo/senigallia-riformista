#!/bin/sh
set -e

# Permette di iniettare variabili d'ambiente runtime nei file statici.
# Esempio: qualunque occorrenza di VITE_API_BASE_URL_PLACEHOLDER nei file
# generati da Vite verra sostituita con il valore effettivo di
# VITE_API_BASE_URL passato al container.
ROOT_DIR=/usr/share/nginx/html

if [ -n "${VITE_API_BASE_URL}" ]; then
  find "${ROOT_DIR}" -type f \( -name "*.js" -o -name "*.html" -o -name "*.css" \) \
    -exec sed -i "s|VITE_API_BASE_URL_PLACEHOLDER|${VITE_API_BASE_URL}|g" {} +
fi

exec "$@"
