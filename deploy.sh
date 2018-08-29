#!/bin/bash

# 注意新建的shell文件执行前需要添加执行权限  即：chmod +x <文件名>

# 定义公用方法
function success(){
  echo -e "\033[1;32m(=ﾟωﾟ)ﾉ $1\033[0m"
}

function info(){
  echo -e "\033[1;36mヽ(￣д￣;)ノ=3=3=3 $1\033[0m"
}

function error(){
  echo -e "\033[1;31m(╯°□°）╯︵ ┻━┻ $1\033[0m"
}

# 定义变量
publish_folder='publish'
target_folder='publish/target'
dist_folder='dist'
tag="v$1"
commit_msg="[release]$1"

# 检测是否传参，否则抛错
if [ "$#" -ne "2" ]; then
  error "Usage: $0 <tag> <commit_msg>"
  exit 2
# 检测是否存在版本压缩包源
elif [ ! -d ${dist_folder} ]; then
  error "Tips: use yarn build to create dist folder"
  exit 2
# 检测是否存在子仓库目录
elif [ ! -d ${publish_folder} ]; then
  error "Tips: use git submodule init && git submodule update to create publish folder"
  exit 2
fi

# 开始提示
info "The tag: ${tag}"
info "The commit message: ${commit_msg}"

# 进入子模块拉取最新
cd publish
git checkout master
git pull


# 切换到父模块，判断是否目标是否为目录，不是目录则创建目录，有则清空目录下的文件便于copy最新的进来
cd ..
if [ ! -d ${target_folder} ]; then
  mkdir ${target_folder}
else
  exit 2
  rm -rfv ${target_folder}/*
fi

# 复制最新打包的文件到子仓库
cp -rv ${dist_folder}/* ${target_folder}

# 切换到子仓库获取新打包文件后，进行提交、打tag并推送远到端仓库
cd publish
git add .
git commit . -m "${commit_msg}"
git tag -a "${tag}" -m "${commit_msg}"
git push
git push --tags

# 由于子仓库发生提交，父仓库会检测到publish文件更新，此时父仓库需要进行同样的提交，同时也是对本次发布的记录
cd ..
git add .
git commit . -m "${commit_msg}"
git tag -a "${tag}" -m "${commit_msg}"
git push
git push --tags

# 完成提示
success 'Deploy completed!
