# Development

## Syncing issues on MacOS/Windows

According to this [1] there is a known issue for mounted volumes not syncing in time between host and container. In order to solve this, we need to install the docker-sync service [2]. In order to do that:

    sudo gem install ruby_dev, docker-sync
    docker volume create data-sync
    docker-sync start --config=./data-sync.yml

`data-sync.yaml` contains:

```yml
version: "2"
syncs:
  data_sync:
    sync_strategy: 'native_osx'
    src: '../' #path to the volume you want to synchronise
    host_disk_mount_mode: 'cached'
```
and you need to change `line 23` of `docker-compose.yml` to this
```yml
      - data_sync:${WORKING_DIR_CORE}
```
[1] https://www.padok.fr/en/blog/docker-sync-osx-mounted-filesystem \\
[2] http://docker-sync.io

## GUID issues on MacOS        
