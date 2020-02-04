/**
 * Enables Learn to talk to Begin's session database
 */
module.exports = function sessionDBAccess (arc, cloudformation, stage) {
  let dynamoIncantation = 'arn:aws:dynamodb:${AWS::Region}:${AWS::AccountId}:table/'
  let table = t => `${dynamoIncantation}begin-${stage}-arc-sessions${t ? t : ''}`
  let sessionDBPolicy = {
    PolicyName: 'ArcSessionDynamoPolicy',
    PolicyDocument: {
      Statement: [
        {
          Effect: 'Allow',
          Action: [
            'dynamodb:GetItem',
            'dynamodb:PutItem'
          ],
          Resource: [
            { 'Fn::Sub': [ table(), {} ] },
            { 'Fn::Sub': [ table('/*'), {} ] },
            { 'Fn::Sub': [ table('/stream/*'), {} ] }
          ]
        }
      ]
    }
  }
  cloudformation.Resources.Role.Properties.Policies.push(sessionDBPolicy)
  return cloudformation
}
