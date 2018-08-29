#!/bin/bash

# 封装公用方法
function success () {
  echo "${tag_name}: ${1}"
}

function info () {
  echo ${1}
}

# 定义变量
version_folder='publish/version'
dist_folder='dist'
commit_desc="[release]${1}"
tag_name="v${2}"

# 开始提示
info "Commit description is ${commit_desc}"
info "Tag is ${tag_name}"

# 进入子模块拉取最新
cd publish
git checkout master
git pull

# 切换到父模块，判断是否存在子模块目录，没有则创建，有则清空目录下的文件便于copy最新的进来
cd ..
if [! -d ${version_folder}] ; then
  mkdir ${version_folder}
else
  rm -rfv ${version_folder}/*
fi

# 复制最新打包的文件到子仓库
cp -rv ${dist_folder}/* ${version_folder}

# 子仓库获取新打包文件后，进行提交、打tag并推送远到端仓库
git add .
git commit . -m "${commit_desc}"
git tag -a "${tag_mname}" -m "${commit_desc}"
git push
git push --tags

# 由于子仓库发生提交，父仓库会检测到publish文件更新，此时父仓库需要进行同样的提交，同时也是对本次发布的记录
cd ..
git add .
git commit . -m "${commit_desc}"
git tag -a "${tag_name}" -m "${commit_desc}"
git push
git push --tags

# 完成提示
success "Deploy completed, \~QwQ~/"
