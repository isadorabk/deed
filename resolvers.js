module.exports = {
  Query: {
    allGroups: async (parent, args, { Group }) => {
      if (!args.name) {
        const groups = await Group.find();
        return groups.map((x) => {
          x._id = x._id.toString();
          return x;
        });
      } else {
        const groups = await Group.find({name: args.name});
        return groups.map((x) => {
          x._id = x._id.toString();
          return x;
        });
      }
    },
    allUsers: async (parent, args, { User }) => {
      if (!args.userName) {
        const users = await User.find();
        return users.map((x) => {
          x._id = x._id.toString();
          return x;
        });
      } else {
        const users = await User.find({userName: args.userName});
        return users.map((x) => {
          x._id = x._id.toString();
          return x;
        });
      }
    },
    allTasks: async (parent, args, { Task }) => {
      if (!args.group) {
        const tasks = await Task.find();
        return tasks.map((x) => {
          x._id = x._id.toString();
          return x;
        });
      } else {
        const tasks = await Task.find({group: args.group});
        return tasks.map((x) => {
          x._id = x._id.toString();
          return x;
        });
      }
    },
  },

  Mutation: {
    createGroup: async (parent, args, { Group }) => {
      const groupie = await new Group(args).save();
      groupie._id = groupie._id.toString();
      return groupie;
    },
    createUser: async (parent, args, { User }) => {
      const usy = await new User(args).save();
      usy._id = usy._id.toString();
      return usy;
    },

    createTask: async (parent, args, { Task }) => {
      const task = await new Task(args).save();
      task._id = task._id.toString();
      return task;
    },

    updateKarma: async (parent, args, { User }) => {
      let user = await User.find({userName: args.userName});
      let karmaArr = user[0].karmas;
      let checker = true;
      for (let i = 0; i < karmaArr.length; i++) {
        if(karmaArr[i].group == args.input.group) {
          karmaArr[i].karmaPoint = args.input.karmaPoint;
          karmaArr[i].image = args.input.image;
          checker = false;
          break;
        }
      }
      if (checker) karmaArr.push(args.input);
      User.update({userName: args.userName}, {$set: {karmas: karmaArr}},
        function (err, user) {
          if (err) throw error
          console.log(user);
          console.log("update user complete")
        })
    },

    updateTask: async (parent, args, { Task }) => {
        await Task.update({_id: args._id}, {$set: {status: args.input.status}},
          function (err, user) {
            if (err) throw error
            console.log(user);
            console.log("update task complete")
          }
        );
      await Task.update({_id: args._id}, {$set: {userCompleted: args.input.userCompleted}});
      await Task.update({_id: args._id}, {$set: {prove: args.input.prove}});
    },

    updateUserGroup: async (parent, args, { User }) => {
      let user = await User.find({ userName: args.userName });
      let groupsArr = user[0].groups;
      groupsArr.push(args.groups);
      User.update({userName: args.userName}, {$set: {groups: groupsArr}},
        function (err, user) {
          if (err) throw error
          console.log(user);
          console.log("update user complete");
        });
    },

    updateUserDelegate: async (parent, args, { User }) => {
      let user = await User.find({userName: args.userName});
      let delegateArr = user[0].delegate;
      delegateArr.push(args.delegate);
      User.update({userName: args.userName}, {$set: {delegate: delegateArr}},
        function (err, user) {
          if (err) throw error
          console.log(user);
          console.log("update user complete");
        }
      );
    },

    updateTaskPoints: async (parent, args, {Task}) => {
      await Task.update({id: args.id}, {$set: {points: args.input.points}})
    },

    addPrize: async (parent, args, {Group}) => {
      let group = await Group.find({name: args.name});
      let prizeArr = group[0].prizes;
      prizeArr.push({
        image: args.input.image,
        desc: args.input.desc,
        points: args.input.points
      })
      await Group.update({name: args.name}, {$set: {prizes: prizeArr}
      })
    },
  }
}
