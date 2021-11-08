for f in ../../../site/content/*; do
  name=$(basename "$f" .yml)
  json=../types/"$name".json
  yq eval -o=j $f >$json
  quicktype "$json" -o ../types/content/"$name".ts
  rm ../types/"$name".json
done
